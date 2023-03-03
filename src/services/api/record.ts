import { IRecord } from "@/interfaces/record";
import { IRecordForm } from "@/interfaces/record/form";
import axios from "axios";

export async function createRecordApi(data: IRecordForm): Promise<IRecord> {
  return axios
    .post("/record", data)
    .then((resp) => {
      return resp.data;
    })
    .catch((e) => {
      throw new Error(e.message);
    });
}

export async function getRecordApi(): Promise<IRecord[]> {
  return axios
    .get("/record")
    .then((resp) => {
      return resp.data;
    })
    .catch((e) => {
      throw new Error(e.message);
    });
}
