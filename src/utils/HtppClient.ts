import axios from "axios";
import type {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from "axios";
import LocalStorage from "./LocalStorage";

const baseURL = process.env.REACT_APP_BASE_URL;

const headers: AxiosRequestConfig["headers"] = {
  "Content-Type": "application/json",
};
class Axios {
  private instance: AxiosInstance;
  private interceptors: number | null = null;
  constructor() {
    const instance = axios.create({
      baseURL,
      headers,
    });
    // request interceptor
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const accessToken = LocalStorage.get("accessToken");
        console.log(config);
        if (config.headers) {
          if (accessToken ) {
            console.log(config.url !== "auths/login");
            config.headers.Authorization = "Bearer " + accessToken;
          } else {
            delete config.headers.Authorization;
          }
        }
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    // Response interceptor
    const interceptors = instance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: AxiosError) => Promise.reject(error)
    );
    this.instance = instance;
    this.interceptors = interceptors;
  }
  public get Instance(): AxiosInstance {
    return this.instance;
  }
  private useInterceptors() {
    if (this.interceptors === null) {
      const interceptors = this.instance.interceptors.response.use(
        (response: AxiosResponse) => response.data,
        (error: AxiosError) => Promise.reject(error)
      );
      this.interceptors = interceptors;
    }
  }
  public get<T = any, R = T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptors();
    return this.Instance.get<T, R>(url, config);
  }
  public post<T = any, R = T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptors();
    return this.Instance.post<T, R>(url, data, config);
  }
  public put<T = any, R = T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptors();
    return this.Instance.put<T, R>(url, data, config);
  }
  public delete<T = any, R = T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptors();
    return this.Instance.delete<T, R>(url, config);
  }
}
const HttpClient = new Axios();
export default HttpClient;
