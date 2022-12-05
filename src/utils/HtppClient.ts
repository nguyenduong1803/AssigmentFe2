import axios from "axios";
import type {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from "axios";
import LocalStorage from "./LocalStorage";

const baseURL = process.env.REACT_APP_BASE_URL;

const headers: AxiosRequestConfig['headers'] = {
  'Content-Type': 'application/json',
};

class Axios {
  private instance: AxiosInstance;
  private interceptor: number | null = null;

  constructor() {
    const instance = axios.create({
      baseURL,
      headers,
    });

    // Request interceptor
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const accessToken = LocalStorage.get('accessToken');
        if (config.headers) {
          if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          } else {
            delete config.headers.Authorization;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    const interceptor = instance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: AxiosError) => Promise.reject(error)
    );

    this.interceptor = interceptor;
    this.instance = instance;
  }

  public get Instance(): AxiosInstance {
    return this.instance;
  }

  private useInterceptor() {
    if (this.interceptor === null) {
      const interceptor = this.instance.interceptors.response.use(
        (response: AxiosResponse) => response.data,
        (error: AxiosError) => Promise.reject(error)
      );
      this.interceptor = interceptor;
    }
  }

  private ejectInterceptor() {
    if (this.interceptor !== null) {
      this.instance.interceptors.response.eject(this.interceptor);
      this.interceptor = null;
    }
  }

  // Create
  public post<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptor();
    return this.Instance.post<T, R>(url, data, config);
  }

  // Read
  public get<T = any, R = T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptor();
    return this.Instance.get<T, R>(url, config);
  }

  // Update
  public put<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptor();
    return this.Instance.put<T, R>(url, data, config);
  }

  // Delete
  public delete<T = any, R = T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptor();
    return this.Instance.delete<T, R>(url, config);
  }

  // Post with full response
  public pull<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.ejectInterceptor();
    return this.Instance.post<T, R>(url, data, config);
  }
}

const HttpClient = new Axios();
export default HttpClient;
