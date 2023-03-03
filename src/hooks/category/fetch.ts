import { ICategory } from "@/interfaces/category";
import { ICategoryForm } from "@/interfaces/category/form";
import { IMutationArgs, IQueryArgs } from "@/interfaces/hook/query";
import { createCategoryApi, getCategoryApi } from "@/services/api/category";
import { registerMutation, registerQuery } from "..";

export function useCategoryCreate() {
  const mutateObject: IMutationArgs<ICategoryForm, ICategory> = {
    key: ["category"],
    callback: (data: ICategoryForm) => createCategoryApi(data),
  };
  return registerMutation(mutateObject);
}

export function useCategoryQuery() {
  const queryObject: IQueryArgs<ICategoryForm, ICategory> = {
    key: ["category"],
    callback: getCategoryApi,
  };
  return registerQuery(queryObject);
}
