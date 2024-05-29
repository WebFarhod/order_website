import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create();

instance.defaults.baseURL = "http://localhost:8080/api";

export default instance;
