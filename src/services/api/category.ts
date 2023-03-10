import { ICategory } from "@/interfaces/category";
import { ICategoryForm } from "@/interfaces/category/form";
import axios from "axios";

export async function createCategoryApi(data: ICategoryForm): Promise<ICategory> {
    return axios
      .post("/category", data)
      .then((resp) => {
        return resp.data;
      })
      .catch((e) => {
        throw new Error(e.message);
      });
  }
  

  export async function getCategoryApi(): Promise<ICategory[]> {
    return axios
      .get("/category")
      .then((resp) => {
        return resp.data;
      })
      .catch((e) => {
        throw new Error(e.message);
      });
  }
  