import { TranslationKeys } from "./translationKeys";

export const enTranslation: Record<TranslationKeys, string> = {
  [TranslationKeys.PageTitleMain]: "TodoList",
  [TranslationKeys.FieldRequired]: "* Required",

  [TranslationKeys.NoAccess]: "You are not allowed to access this resources.",

  [TranslationKeys.PageTitleHome]: "Home",
  [TranslationKeys.WelcomeTextHeader]: "TodoList",
  [TranslationKeys.WelcomeTextDescription]:
    "Welcome to our Todo/Reminder application! With our app, you can easily stay on top of your daily tasks and never forget an important appointment again. Our user-friendly interface and customizable features make it easy to create, organize, and prioritize your to-do lists and reminders. Get started today and take control of your busy schedule!",
  [TranslationKeys.LoginPanelSeparatorText]: "or",
  [TranslationKeys.GoToFeaturesButtonText]: "Explore features",
  [TranslationKeys.LoginPanelHeader]: "Sign in or Sign up",
  [TranslationKeys.LoginPanelHeaderDescription]: "Sign in with google:",
  [TranslationKeys.Email]: "email",
  [TranslationKeys.DisplayName]: "nick name",
  [TranslationKeys.Password]: "password",
  [TranslationKeys.PasswordRepeat]: "password repeat",
  [TranslationKeys.LoginButtonText]: "sign in",
  [TranslationKeys.RegisterButtonText]: "sign up",
  [TranslationKeys.GoogleSignIn]: "google",
  [TranslationKeys.EmailRequired]: "email required",
  [TranslationKeys.DisplayNameRequired]: "name required",
  [TranslationKeys.PasswordRequired]: "password required",
  [TranslationKeys.WrongPassword]: "wrong password",
  [TranslationKeys.PasswordsNoMatch]: "passwords don't match",
  [TranslationKeys.LoginSuccess]: "Logged in successfully.",
  [TranslationKeys.InvalidCredentials]: "Invalid credentials, try again",

  [TranslationKeys.PageTitleFeatures]: "Features",

  [TranslationKeys.PageTitleReminders]: "Reminders",
  [TranslationKeys.Reminder]: "Reminder",
  [TranslationKeys.ReminderInfo]:
    "Create new reminder. It will be visible only in yours callendar.",
  [TranslationKeys.ScopeChoose]: "Choose scope",
  [TranslationKeys.OrChooseTodoList]: "Or choose todo list",

  [TranslationKeys.PageTitleTodoLists]: "TodoLists",
  [TranslationKeys.EmptyTodoLists]: "There are no todo lists. Create one!",
  [TranslationKeys.CreateNewTodoList]: "Create new todo list",
  [TranslationKeys.CreateTodoListDialogHeader]: "Create new todo list",
  [TranslationKeys.EditTodoListDialogHeader]: "Edit todo list",
  [TranslationKeys.ShareTodoList]: "Share todo list",
  [TranslationKeys.TodoListDialogInputTitle]: "List title",
  [TranslationKeys.TodoListDialogButton]: "Save",
  [TranslationKeys.ManageOwners]: "Manage owners",
  [TranslationKeys.ManageUsers]: "Manage users",
  [TranslationKeys.CurrentOwners]: "Owners",
  [TranslationKeys.CurrentUsers]: "Users",
  [TranslationKeys.DelteTodoList]: "Delete todo list",
  [TranslationKeys.DelteTodoListWarning]:
    "Are you sure you want to delete this todo list? This action cannot be undone. All tasks in this list will be deleted.",
  [TranslationKeys.Other]: "Other",
  [TranslationKeys.BackToTodoLists]: "Back to todo lists",

  [TranslationKeys.EmptyTasksList]: "No tasks in this list.",
  [TranslationKeys.DelteTask]: "Delete task",
  [TranslationKeys.AddTask]: "Add task",
  [TranslationKeys.EditTask]: "Edit task",
  [TranslationKeys.TaskName]: "Task name",
  [TranslationKeys.TaskImportant]: "Important",
  [TranslationKeys.DelteTaskWarning]:
    "Are you sure you want to delete this task? This action cannot be undone.",
  [TranslationKeys.TaskMarkedAsFinishedWithDate]:
    "Task was marked as finished with date",
  [TranslationKeys.TaskIsOnFinishedList]:
    "It is visible on finished tasks list.",
  [TranslationKeys.PlannedStartDate]: "Planned start date",
  [TranslationKeys.PlannedFinishDate]: "Planned finish date",
  [TranslationKeys.StartDate]: "Start date",
  [TranslationKeys.FinishDate]: "Finish date",
  [TranslationKeys.Creator]: "Creator",
  [TranslationKeys.Days]: "days",
  [TranslationKeys.Hours]: "hours",
  [TranslationKeys.Ago]: "ago",

  [TranslationKeys.Notifications]: "Notifications",
  [TranslationKeys.ArchivedNotifications]: "Archived notifications",
  [TranslationKeys.ArchiveAll]: "Archive all",
  [TranslationKeys.UnarchiveAll]: "Unarchive all",
  [TranslationKeys.DeleteAllArchived]: "Delete all archived",
  [TranslationKeys.EmptyNotificationsList]: "There are no new notifications.",
  [TranslationKeys.EmptyArchivedNotificationsList]:
    "No archived notifications.",

  // Notifications messages
  [TranslationKeys.NotificationByUserPart]: ", by user: ",
  [TranslationKeys.NotificationInTodoListPart]: ", in todo list: ",
  [TranslationKeys.NotificationNewTodoListPart]: "New todo list ",
  [TranslationKeys.NotificationExistingTodoListPart]: "Todo list ",
  [TranslationKeys.NotificationNewTaskPart]: "New task ",
  [TranslationKeys.NotificationExistingTaskPart]: "Task ",
  [TranslationKeys.NotificationWasCreatedPart]: "was created ",
  [TranslationKeys.NotificationWasModifiedPart]: "was modified ",
  [TranslationKeys.NotificationWasDeletedPart]: "was deleted ",
  [TranslationKeys.NotificationUserInvitedPart]:
    "You've been invited to todo list ",
  [TranslationKeys.NotificationUserRemovedPart]:
    "You've been removed from members of todo list ",
  [TranslationKeys.NotificationUnknownAction]: "Unknown action was done",

  [TranslationKeys.PageTitleUserSettings]: "User settings",
  [TranslationKeys.CurrentPasswordLabel]: "current password",
  [TranslationKeys.ChangePassword]: "Change password",
  [TranslationKeys.NewPasswordLabel]: "new password",
  [TranslationKeys.NewPasswordRepeatLabel]: "new password repeat",
  [TranslationKeys.PasswordChanged]: "New password set.",
  [TranslationKeys.ChangePassword]: "Change password",
  [TranslationKeys.ChangeAvatar]: "Change avatar",
  [TranslationKeys.AvatarChanged]: "Avatar saved",
  [TranslationKeys.DispalyNameChanged]: "New display name set.",
  [TranslationKeys.ChangeDisplayName]: "Change display name",
  [TranslationKeys.Logout]: "Logout",
  [TranslationKeys.Theme]: "Theme",
  [TranslationKeys.LanguagePolish]: "Polish language",
  [TranslationKeys.LanguageEnglish]: "English language",

  [TranslationKeys.Save]: "Save",
  [TranslationKeys.Cancel]: "Anuluj",
};
