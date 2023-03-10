import { IRecord } from "@/interfaces/record";
import { IRecordForm } from "@/interfaces/record/form";
import { IMutationArgs, IQueryArgs } from "@/interfaces/hook/query";
import { createRecordApi, getRecordApi } from "@/services/api/record";
import { useRegisterMutation, useRegisterQuery } from "..";

export function useRecordCreate(callback?: () => void) {
  const mutateObject: IMutationArgs<IRecordForm, IRecord> = {
    key: ["record"],
    callback: (data: IRecordForm) => createRecordApi(data),
    
  };
  return useRegisterMutation(mutateObject);
}

export function useRecordQuery() {
  const queryObject: IQueryArgs<IRecordForm, IRecord[]> = {
    key: ["record"],
    callback: getRecordApi,
  };
  return useRegisterQuery(queryObject);
}
