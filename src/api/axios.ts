import axios, { AxiosInstance } from "axios";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

const api = axios.create({ baseURL: "http://94.158.54.194:9092" });

export default api;
