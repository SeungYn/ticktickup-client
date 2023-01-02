import axios, {
  AxiosInstance,
  AxiosInterceptorOptions,
  AxiosRequestConfig,
} from 'axios';

export default class Http {
  private static instance: Http;
  private readonly client: AxiosInstance;
  constructor(private baseURL: string) {
    this.client = axios.create({
      baseURL: baseURL,
      withCredentials: true,
    });
  }

  async fetch(url: string, options: AxiosRequestConfig) {}

  public static getHttpInstance() {
    if (!Http.instance) {
      Http.instance = new Http(process.env.REACT_APP_BASE_URL as string);
    }
  }
}
