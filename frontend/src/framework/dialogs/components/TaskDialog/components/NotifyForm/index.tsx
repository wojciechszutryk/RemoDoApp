import { Autocomplete } from "@mui/material";
import DateTimePicker from "atomicComponents/atoms/DateTimePicker";
import { Select } from "atomicComponents/atoms/Select";
import { TextField } from "atomicComponents/atoms/TextField";
import dayjs from "dayjs";
import { ChangeEvent, memo } from "react";
import {
  Control,
  Controller,
  Path,
  PathValue,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { ITaskDialog } from "../../models/taskDialog.model";
import {
  createDateFromSelectValues,
  createNotifySelectParams,
} from "./helpers";
import { StyledNotifyInputsWrapper } from "./styles";

interface Props<TFormValues extends ITaskDialog> {
  control: Control<TFormValues, any>;
}

const NotifyForm = <
  TFormValues extends ITaskDialog,
  TFieldValues extends TFormValues
>({
  control,
}: Props<TFieldValues>): JSX.Element => {
  const watch = useWatch<TFormValues>();
  const { setValue } = useFormContext<TFormValues>();

  const timePointOptions = watch["startDate"]
    ? watch["finishDate"]
      ? ["Start", "Finish"]
      : ["Start"]
    : watch["finishDate"]
    ? ["Finish"]
    : ["Start"];

  const disableSelects =
    !watch["notify"] || (!watch["startDate"] && !watch["finishDate"]);

  return (
    <StyledNotifyInputsWrapper>
      <Controller
        control={control}
        name={"minsAccordingToTimePoint" as Path<TFieldValues>}
        render={({ field: { ref, onChange, value } }) => (
          <Autocomplete
            ref={ref}
            disabled={disableSelects}
            autoSelect
            onChange={(event, value) => {
              if (value == null) return;

              const mins = parseInt(value);
              const newDate = createDateFromSelectValues(
                {
                  minsAccordingToTimePoint: mins,
                  beforeOrAfter: watch["beforeOrAfter"],
                  timePoint: watch["timePoint"],
                },
                watch["startDate"] && new Date(watch["startDate"]),
                watch["finishDate"] && new Date(watch["finishDate"])
              );

              setValue(
                "notifyDate" as Path<TFormValues>,
                (newDate || undefined) as PathValue<
                  TFormValues,
                  Path<TFormValues>
                >
              );

              onChange(
                mins.toString() as unknown as
                  | PathValue<TFieldValues, Path<TFieldValues>>
                  | ChangeEvent<Element>
              );
            }}
            value={value ? value.toString() : null}
            freeSolo
            options={["5", "10", "15", "30"]}
            renderInput={(params) => {
              return <TextField {...params} disabled={disableSelects} />;
            }}
          />
        )}
      />
      <span> min</span>
      <Controller
        control={control}
        name={"beforeOrAfter" as Path<TFieldValues>}
        render={({ field: { onChange, value } }) => (
          <Select
            options={["Before", "After"]}
            disabled={disableSelects}
            onChange={(event) => {
              const newBeforeOrAfterValue = event.target.value as
                | "Before"
                | "After"
                | undefined;
              const newDate = createDateFromSelectValues(
                {
                  minsAccordingToTimePoint: watch["minsAccordingToTimePoint"],
                  beforeOrAfter: newBeforeOrAfterValue,
                  timePoint: watch["timePoint"],
                },
                watch["startDate"] && new Date(watch["startDate"]),
                watch["finishDate"] && new Date(watch["finishDate"])
              );

              setValue(
                "notifyDate" as Path<TFormValues>,
                (newDate || undefined) as PathValue<
                  TFormValues,
                  Path<TFormValues>
                >
              );

              if (newBeforeOrAfterValue)
                onChange(
                  newBeforeOrAfterValue as unknown as
                    | PathValue<TFieldValues, Path<TFieldValues>>
                    | ChangeEvent<Element>
                );
            }}
            value={value as "Before" | "After"}
          />
        )}
      />
      <Controller
        control={control}
        name={"timePoint" as Path<TFieldValues>}
        render={({ field: { onChange, value } }) => (
          <Select
            options={timePointOptions}
            disabled={disableSelects}
            defaultValue={"Start"}
            placeholder={"Time point"}
            onChange={(event) => {
              const newTimePoint = event.target.value as
                | "Start"
                | "Finish"
                | undefined;
              const newDate = createDateFromSelectValues(
                {
                  minsAccordingToTimePoint: watch["minsAccordingToTimePoint"],
                  beforeOrAfter: watch["beforeOrAfter"],
                  timePoint: newTimePoint,
                },
                watch["startDate"] && new Date(watch["startDate"]),
                watch["finishDate"] && new Date(watch["finishDate"])
              );

              setValue(
                "notifyDate" as Path<TFormValues>,
                (newDate || undefined) as PathValue<
                  TFormValues,
                  Path<TFormValues>
                >
              );

              onChange(
                newTimePoint as unknown as
                  | PathValue<TFieldValues, Path<TFieldValues>>
                  | ChangeEvent<Element>
              );
            }}
            value={value as "Start" | "Finish"}
          />
        )}
      />
      <Controller
        control={control}
        name={"notifyDate" as Path<TFieldValues>}
        render={({ field: { ref, onChange, value } }) => (
          <DateTimePicker
            minDate={dayjs()}
            disabled={!watch["notify"]}
            onChange={(date) => {
              const selectParams = createNotifySelectParams(
                date?.toDate(),
                watch["startDate"] && new Date(watch["startDate"]),
                watch["finishDate"] && new Date(watch["finishDate"])
              );

              if (selectParams) {
                setValue(
                  "minsAccordingToTimePoint" as Path<TFormValues>,
                  selectParams.minsAccordingToTimePoint as PathValue<
                    TFormValues,
                    Path<TFormValues>
                  >
                );
                setValue(
                  "beforeOrAfter" as Path<TFormValues>,
                  selectParams.beforeOrAfter as PathValue<
                    TFormValues,
                    Path<TFormValues>
                  >
                );
                setValue(
                  "timePoint" as Path<TFormValues>,
                  selectParams.timePoint as PathValue<
                    TFormValues,
                    Path<TFormValues>
                  >
                );
              }

              onChange(
                date?.toDate() as unknown as
                  | PathValue<TFieldValues, Path<TFieldValues>>
                  | ChangeEvent<Element>
              );
            }}
            value={dayjs(value as Date)}
            inputRef={ref}
          />
        )}
      />
    </StyledNotifyInputsWrapper>
  );
};

export default memo(NotifyForm);
