import { IMutationArgs, IMutationResponse, IQueryArgs, IQueryResponse } from "@/interfaces/hook/query";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useRegisterMutation<IArg, IReturn>({ callback, key, onSuccess }: IMutationArgs<IArg, IReturn>) {
  const queryClient = useQueryClient();
  return useMutation(
    (data: IArg) => {
      return callback && callback(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(key);
        onSuccess && onSuccess();
      },
    }
  );
}

export function useRegisterQuery<IArg, IReturn>({ callback, key }: IQueryArgs<IArg, IReturn>) {
  const { status, data, isLoading, error } = useQuery(key, (arg) => {
    return callback && callback(arg);
  });
  return { data, status, loading: isLoading, error };
}
