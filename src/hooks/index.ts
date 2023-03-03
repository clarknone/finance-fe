import { IMutationArgs, IMutationResponse, IQueryArgs, IQueryResponse } from "@/interfaces/hook/query";
import { useMutation, useQuery } from "@tanstack/react-query";

export function registerMutation<IArg, IReturn>({ callback, key }: IMutationArgs<IArg, IReturn>): IMutationResponse {
  const { status, mutate } = useMutation((data: IArg) => {
    return callback && callback(data);
  });
  return { mutate, status };
}

export function registerQuery<IArg, IReturn>({ callback, key }: IQueryArgs<IArg, IReturn>): IQueryResponse<IReturn> {
  const { status, data } = useQuery(key, (arg) => {
    return callback && callback(arg);
  });
  return { data, status };
}
