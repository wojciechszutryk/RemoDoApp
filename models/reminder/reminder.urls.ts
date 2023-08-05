export const PARAM_START_DATE = "startDate";
export const PARAM_END_DATE = "endDate";
export const REMINDER_PARAM = "reminder";

export const URL_REMINDERS = "/reminders";

export const URL_REMINDER = (taskId?: string) =>
  `/${taskId || ":" + REMINDER_PARAM}`;
