import { useMutation } from "@tanstack/react-query";
import { apiPost } from "framework/asyncInteractions";
import { FRONTIFY_URL } from "framework/asyncInteractions/frontifyRequestUrl.helper";
import {
  ICreateReminderDTO,
  IReminderAttached,
} from "linked-models/reminder/reminder.dto";
import { URL_REMINDERS } from "linked-models/reminder/reminder.urls";
import { mapITaskToITaskDTO } from "linked-models/task/task.dto";
import { ITask } from "linked-models/task/task.model";
import useUpdateQueriesAfterCreatingReminder from "./useUpdateQueriesAfterCreatingReminder";

export const useCreateReminderMutation = () => {
  const updateQueriesAfterCreatingReminder =
    useUpdateQueriesAfterCreatingReminder();

  const createReminder = async (data: ITask) => {
    const url = FRONTIFY_URL(URL_REMINDERS);
    return apiPost<ICreateReminderDTO, IReminderAttached>(
      url,
      mapITaskToITaskDTO(data)
    ).then((res) => res.data);
  };

  return useMutation(createReminder, {
    onSuccess: updateQueriesAfterCreatingReminder,
  });
};
