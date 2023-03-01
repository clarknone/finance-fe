import { IAuthUser } from "@/interfaces/auth";
import { ILoginForm, ISignupForm } from "@/interfaces/auth/form";
import axios from "axios";


export async function loginApi(data: ILoginForm): Promise<IAuthUser> {
  return axios
    .post("", data)
    .then((resp) => {
      return resp.data;
    })
    .catch((e) => {
      throw new Error(e.message);
    });
}

export async function signupApi(data: ISignupForm): Promise<IAuthUser> {
  return axios
    .post("", data)
    .then((resp) => {
      return resp.data;
    })
    .catch((e) => {
      throw new Error(e.message);
    });
}
