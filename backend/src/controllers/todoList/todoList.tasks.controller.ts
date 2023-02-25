import { currentUser } from "decorators/currentUser.decorator";
import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  requestBody,
  requestParam,
} from "inversify-express-utils";
import { OkResult } from "inversify-express-utils/lib/results";
import { ITask } from "linked-models/task/task.model";
import { URL_TODO_LIST_TASKS } from "linked-models/task/task.urls";
import { TODO_LIST_PARAM } from "linked-models/todoList/todoList.urls";
import { IUserAttached } from "linked-models/User/User.model";
import { CheckTodoListPermission } from "middlewares/todoList/checkTodoListPermission.middleware";
import { SetTodoListPermissions } from "middlewares/todoList/setTodoListPermissions";
import { SetCurrentUser } from "middlewares/user/setCurrentUser.middleware";
import { TodoListPermissions } from "models/authorization.model";
import { TaskService } from "services/task.service";

@controller(URL_TODO_LIST_TASKS(), SetCurrentUser)
export class TodoListTasksController extends BaseHttpController {
  constructor(@inject(TaskService) private readonly taskServce: TaskService) {
    super();
  }

  @httpGet("") //TODO add permission check TodoListPermissions.ReadTodoList
  async getTodoListTasks(
    @requestParam(TODO_LIST_PARAM) todoListId: string
  ): Promise<OkResult> {
    const todoLists = await this.taskServce.getTasksByTodoListId(todoListId);

    return this.ok(todoLists);
  }

  @httpPost(
    "",
    SetTodoListPermissions,
    CheckTodoListPermission(TodoListPermissions.CanCreateTask)
  )
  async createTaskInTodoList(
    @currentUser() currentUser: IUserAttached,
    @requestBody() body: ITask,
    @requestParam(TODO_LIST_PARAM) todoListId: string
  ): Promise<OkResult> {
    if (!body.text) return this.json("Invalid data", 400);

    const task = await this.taskServce.createTaskInTodoList(
      todoListId,
      body,
      currentUser.id
    );

    return this.ok(task);
  }
}
