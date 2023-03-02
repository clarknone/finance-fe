import { getCategoryApi } from "@/services/api/category";
import { useQueries, useQuery, useMutation } from "@tanstack/react-query";

export function useCategory() {
  const { status, data, isLoading, error } = useQuery(["category"], () => {
    return getCategoryApi();
  });
  return {
    data,
    error,
  };
}
