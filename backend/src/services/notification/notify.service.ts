import { inject, injectable } from "inversify";
import { EventName, EventSubject } from "linked-models/event/event.enum";
import { AppLanguages } from "linked-models/language/languages.enum";
import {
  IUserAttached,
  NotificationPreference,
} from "linked-models/user/user.model";
import { SocketNotificationService } from "services/notification/socket.notification.service";
import { NotificationService } from "./notification.service";
import { PushNotificationService } from "./push.notification.service";

@injectable()
export class NotifyService {
  constructor(
    @inject(NotificationService)
    private readonly notificationService: NotificationService,
    @inject(SocketNotificationService)
    private readonly socketNotificationService: SocketNotificationService,
    @inject(PushNotificationService)
    private readonly pushNotificationService: PushNotificationService
  ) {}

  private getUsersToNotiftByPreference(
    users: IUserAttached[],
    preferenceScope: EventName,
    preference: NotificationPreference
  ) {
    return users.filter(
      (u) =>
        u.preferences.notificationPreferences[preferenceScope] === preference ||
        u.preferences.notificationPreferences[preferenceScope] ===
          NotificationPreference.ALL
    );
  }

  public async notifyUsers<T>(
    /** potential users to notify - e.g. todoList members or owners */
    memberUsers: IUserAttached[],
    eventCreatorId: string,
    eventName: EventName,
    eventSubject: EventSubject,
    payload: T,
    notificationScopes?: {
      todoListId?: string;
      taskId?: string;
    }
  ): Promise<void> {
    //for now we create notification for all users
    //TODO: handle NotificationPreference.NONE and do not create notification for those users
    const createdNotifications =
      await this.notificationService.createNotificationForUsers(
        memberUsers.map((u) => u.id).filter((id) => id !== eventCreatorId),
        eventName,
        eventSubject,
        eventCreatorId,
        notificationScopes?.todoListId,
        notificationScopes?.taskId
      );
    const usersToNotifyBySocket = this.getUsersToNotiftByPreference(
      memberUsers,
      eventName,
      NotificationPreference.SOCKET
    );
    const notificationsToSendBySocket = createdNotifications.filter((n) =>
      usersToNotifyBySocket.some((u) => u.id === n.userId)
    );
    this.socketNotificationService.notifyUsers(
      notificationsToSendBySocket,
      payload
    );

    const usersToNotifyByPush = this.getUsersToNotiftByPreference(
      memberUsers,
      eventName,
      NotificationPreference.PUSH
    );
    const notificationsToSendByPush = createdNotifications.filter((n) =>
      usersToNotifyByPush.some((u) => u.id === n.userId)
    );
    const userIdToPreferedLanguageMap = usersToNotifyByPush.reduce(
      (map, user) => {
        map[user.id] = user.preferences.language;
        return map;
      },
      {} as { [userId: string]: AppLanguages }
    );
    this.pushNotificationService.notifyUsers(
      notificationsToSendByPush,
      payload,
      userIdToPreferedLanguageMap
    );
  }
}
