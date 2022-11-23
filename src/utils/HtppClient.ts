import axios from "axios";
import type {
  AxiosInstance,
  // AxiosResponse,
  // AxiosError,
  AxiosRequestConfig,
} from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;
const headers: AxiosRequestConfig["headers"] = {
  "Content-Type": "application/json",
};

class Axios {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL,
      headers,
    });
  }
  public get Instance(): AxiosInstance {
    return this.instance;
  }

  public get<T = any, R = T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.Instance.get<T, R>(url, config);
  }
  public post<T = any, R = T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.Instance.post<T, R>(url, data, config);
  }
  public put<T = any, R = T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.Instance.put<T, R>(url, data, config);
  }
  public delete<T = any, R = T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.Instance.delete<T, R>(url, config);
  }
}
const HttpClient = new Axios();
export default HttpClient;
