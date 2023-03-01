import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.timeout = 3000;

export function setToken(token?: string) {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
}
