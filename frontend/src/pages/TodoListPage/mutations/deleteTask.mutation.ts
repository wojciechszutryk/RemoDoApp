import { apiDelete } from "framework/asyncInteractions";
import { FRONTIFY_URL } from "framework/asyncInteractions/frontifyRequestUrl.helper";
import { ITaskAttached } from "linked-models/task/task.model";
import { URL_TODO_LIST_TASK } from "linked-models/task/task.urls";
import { IExtendedTodoListDto } from "linked-models/todoList/todoList.dto";
import { ITodoListAttached } from "linked-models/todoList/todoList.model";
import {
  PARAM_WITH_TASKS,
  URL_TODO_LISTS,
} from "linked-models/todoList/todoList.urls";
import { useMutation, useQueryClient } from "react-query";

export const useDeleteTaskMutation = () => {
  const queryClient = useQueryClient();

  const deleteTask = async (taskId: string) => {
    const url = FRONTIFY_URL(URL_TODO_LIST_TASK(taskId));
    return apiDelete<ITaskAttached>(url).then((res) => res.data);
  };

  return useMutation(deleteTask, {
    onSuccess: (deletedTask) => {
      queryClient.setQueryData(
        [URL_TODO_LISTS, PARAM_WITH_TASKS],
        (prev?: IExtendedTodoListDto[]): IExtendedTodoListDto[] => {
          return (
            prev?.filter((td) => {
              return td.id !== deletedTodoList.id;
            }) || []
          );
        }
      );
    },
  });
};
