import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiPost } from "framework/asyncInteractions";
import { FRONTIFY_URL } from "framework/asyncInteractions/frontifyRequestUrl.helper";
import { useCurrentUser } from "framework/authentication/useCurrentUser";
import { ITaskDTO, mapITaskToITaskDTO } from "linked-models/task/task.dto";
import { ITask, ITaskAttached } from "linked-models/task/task.model";
import { URL_TODO_LIST_TASKS } from "linked-models/task/task.urls";
import { IExtendedTodoListDto } from "linked-models/todoList/todoList.dto";
import {
  PARAM_EXTENDED,
  URL_TODO_LISTS,
} from "linked-models/todoList/todoList.urls";

interface ICreateTaskInTodoListMutation {
  todoListId: string;
  data: ITask;
}

export const useCreateTaskInTodoListMutation = () => {
  const { currentUser } = useCurrentUser();
  const queryClient = useQueryClient();

  const createTaskInTodoList = async (todoListId: string, data: ITask) => {
    const url = FRONTIFY_URL(URL_TODO_LIST_TASKS(todoListId));
    return apiPost<ITaskDTO, ITaskAttached>(url, mapITaskToITaskDTO(data)).then(
      (res) => res.data
    );
  };

  return useMutation(
    ({ todoListId, data }: ICreateTaskInTodoListMutation) =>
      createTaskInTodoList(todoListId, data),
    {
      onSuccess: (createdTask) => {
        const queryKey = [URL_TODO_LISTS, PARAM_EXTENDED];
        queryClient.setQueryData(
          queryKey,
          (prev?: IExtendedTodoListDto[]): IExtendedTodoListDto[] => {
            if (!prev) return [];
            const todoList = prev.find(
              (td) => td.id === createdTask.todoListId
            );
            if (!todoList) return prev;
            const todoListWithNewTask = {
              ...todoList,
              tasks: [
                ...todoList.tasks,
                { ...createdTask, creator: currentUser! },
              ],
            };
            return prev.map((td) =>
              td.id === todoListWithNewTask.id ? todoListWithNewTask : td
            );
          }
        );
      },
    }
  );
};
