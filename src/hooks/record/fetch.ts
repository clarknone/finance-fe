import { IRecord } from "@/interfaces/record";
import { IRecordForm } from "@/interfaces/record/form";
import { IMutationArgs, IQueryArgs } from "@/interfaces/hook/query";
import { createRecordApi, getRecordApi } from "@/services/api/record";
import { registerMutation, registerQuery } from "..";

export function useRecordCreate() {
  const mutateObject: IMutationArgs<IRecordForm, IRecord> = {
    key: ["record"],
    callback: (data: IRecordForm) => createRecordApi(data),
  };
  return registerMutation(mutateObject);
}

export function useRecordQuery() {
  const queryObject: IQueryArgs<IRecordForm, IRecord> = {
    key: ["record"],
    callback: getRecordApi,
  };
  return registerQuery(queryObject);
}
