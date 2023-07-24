import {
  TodoListCollectionName,
  getTodoListCollection,
} from "dbSchemas/todoList.schema";
import { Container } from "inversify";
import { SetPermissions } from "middlewares/permissions/setPermissions.middleware";
import { TodoListCreatedEventHandler } from "services/todoList/event-handlers/todoList.created.event.handlers";
import { TodoListDeletedEventHandler } from "services/todoList/event-handlers/todoList.deleted.event.handlers";
import { TodoListUpdatedEventHandler } from "services/todoList/event-handlers/todoList.updated.event.handlers";
import { TodoListService } from "services/todoList/todoList.service";

export const registerTodoListBindings = (container: Container) => {
  container
    .bind(TodoListCollectionName)
    .toDynamicValue(() => getTodoListCollection());
  container.bind(SetPermissions).toSelf();
  container.bind(TodoListService).toSelf();
  container.bind(TodoListCreatedEventHandler).toSelf();
  container.bind(TodoListUpdatedEventHandler).toSelf();
  container.bind(TodoListDeletedEventHandler).toSelf();
};
