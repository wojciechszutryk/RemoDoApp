import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Button } from "atomicComponents/atoms/Button";
import Dialog from "atomicComponents/atoms/Dialog";
import { TextField } from "atomicComponents/atoms/TextField";
import { ControlledTextField } from "atomicComponents/molecules/ControlledInputText";
import { useDialogs } from "framework/dialogs";
import { TranslationKeys } from "framework/translations/translationKeys";
import { ITodoList } from "linked-models/todoList/todoList.model";
import { useCreateTodoListMutation } from "pages/TodoListsPage/mutations/createTodoList.mutation";
import { useEditTodoListMutation } from "pages/TodoListsPage/mutations/editTodoList.mutation";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  StyledAccordion,
  StyledAutocomplete,
  StyledExpandMoreIcon,
  StyledForm,
} from "./styles";

const TodoListModal = (): JSX.Element => {
  const {
    dialogsState: {
      todoListDialog: { visible, editTodoListData },
    },
    dialogsActions: { updateTodoListDialog },
  } = useDialogs();
  const { control, handleSubmit, setValue } = useForm<ITodoList>({
    defaultValues: {
      name: editTodoListData?.name || "",
      assignedOwners: editTodoListData?.assignedOwners || [],
      assignedUsers: editTodoListData?.assignedUsers || [],
    },
  });
  const createTodoListMutation = useCreateTodoListMutation();
  const editTodoListMutation = useEditTodoListMutation();
  const { t } = useTranslation();

  const onSubmit = (data: ITodoList) => {
    console.log(data);

    if (editTodoListData)
      editTodoListMutation.mutate({ todoListId: editTodoListData.id, data });
    else createTodoListMutation.mutate(data);

    updateTodoListDialog({ visible: false });
  };

  return (
    <Dialog
      open={visible}
      onClose={() => updateTodoListDialog({ visible: false })}
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4">
          {t(TranslationKeys.TodoListDialogHeader)}
        </Typography>
        <ControlledTextField
          name={"name"}
          control={control}
          placeholder={t(TranslationKeys.TodoListDialogInputTitle)}
        />
        <StyledAccordion>
          <AccordionSummary expandIcon={<StyledExpandMoreIcon />}>
            <Typography>Accordion 1- add translation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Current owners - add translation</Typography>
            <StyledAutocomplete
              multiple
              options={[]}
              onChange={(_, value) => {
                setValue("assignedOwners", value);
              }}
              defaultValue={editTodoListData?.assignedOwners || []}
              freeSolo
              renderInput={(params) => <TextField {...params} />}
            />
            <Typography>Current users - add translation</Typography>
            <StyledAutocomplete
              multiple
              options={[]}
              onChange={(_, value) => {
                setValue("assignedUsers", value);
              }}
              defaultValue={editTodoListData?.assignedOwners || []}
              freeSolo
              renderInput={(params) => <TextField {...params} />}
            />
          </AccordionDetails>
        </StyledAccordion>
        <Button type="submit">{t(TranslationKeys.TodoListDialogHeader)}</Button>
      </StyledForm>
    </Dialog>
  );
};

export default memo(TodoListModal);
