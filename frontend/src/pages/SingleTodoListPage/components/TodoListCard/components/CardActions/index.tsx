import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import { CardActions as MUICardActions } from "@mui/material";
import { useDialogs } from "framework/dialogs";
import { TranslationKeys } from "framework/translations/translatedTexts/translationKeys";
import { IExtendedTodoListDto } from "linked-models/todoList/todoList.dto";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { StyledExpandMore } from "../../styles";
import ActionsButtons from "./components/ActionsButtons";
import ActionsMenu from "./components/ActionsMenu";
import { StyledCreateTaskButton } from "./styles";

interface Props {
  todoList: IExtendedTodoListDto;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  showExpandIcon?: boolean;
  actionsVariant: "buttons" | "menu";
  showEditButton?: boolean;
  showShareButton?: boolean;
  showDeleteButton?: boolean;
  showCreateTaskButton?: boolean;
}

const CardActions = ({
  todoList: { name, id, icon, assignedOwners, assignedUsers },
  expanded,
  setExpanded,
  showExpandIcon,
  actionsVariant,
  showEditButton,
  showShareButton,
  showDeleteButton,
  showCreateTaskButton,
}: Props): JSX.Element => {
  const { dialogsActions } = useDialogs();
  const { t } = useTranslation();

  const interactions = [];

  if (showEditButton) {
    interactions.push({
      onClick: () =>
        dialogsActions.updateTodoListDialog({
          visible: true,
          editTodoListData: {
            id,
            name,
            icon,
            assignedOwners,
            assignedUsers,
          },
        }),
      label: t(TranslationKeys.EditTodoListDialogHeader),
      icon: <EditIcon />,
    });
  }

  if (showShareButton) {
    interactions.push({
      onClick: () =>
        dialogsActions.updateShareTodoListDialog({
          visible: true,
          todoListId: id,
          assignedOwners,
          assignedUsers,
          todoListName: name || t(TranslationKeys.Reminder),
        }),
      label: t(TranslationKeys.ShareTodoList),
      icon: <ShareIcon />,
    });
  }

  if (showDeleteButton) {
    interactions.push({
      onClick: () =>
        dialogsActions.updateDeleteTodoListDialog({
          visible: true,
          todoListId: id,
        }),
      label: t(TranslationKeys.DelteTodoList),
      icon: <DeleteIcon />,
    });
  }

  return (
    <MUICardActions disableSpacing>
      {showCreateTaskButton && (
        <StyledCreateTaskButton
          noBorder
          onClick={() =>
            dialogsActions.updateTaskDialog({ visible: true, todoListId: id })
          }
        >
          {t(TranslationKeys.AddTask)}
        </StyledCreateTaskButton>
      )}
      {interactions.length > 0 &&
        (actionsVariant === "buttons" ? (
          <ActionsButtons interactions={interactions} />
        ) : (
          <ActionsMenu interactions={interactions} />
        ))}

      {showExpandIcon && (
        <StyledExpandMore
          expand={expanded}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </StyledExpandMore>
      )}
    </MUICardActions>
  );
};

export default memo(CardActions);
