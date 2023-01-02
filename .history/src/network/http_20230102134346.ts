import axios, {
  AxiosInstance,
  AxiosInterceptorOptions,
  AxiosRequestConfig,
} from 'axios';

export interface HttpIterface {
  fetch: (url: string, options: AxiosRequestConfig) => void;
}

export default class Http implements HttpIterface {
  private static instance: Http;
  private readonly client: AxiosInstance;
  private constructor(baseURL: string) {
    this.client = axios.create({
      baseURL: baseURL,
      withCredentials: true,
    });
  }

  async fetch(url: string, options: AxiosRequestConfig) {
    this.client.defaults.headers.post['Content-Type'] = 'application/json';
    const { data, method, headers } = options;
    const request = {
      url,
      method,
      headers: {
        ...headers,
      },
      data,
    };
    try {
      const res = await this.client(request);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  public static getHttpInstance() {
    if (!Http.instance) {
      Http.instance = new Http(process.env.REACT_APP_BASE_URL as string);
    }
    return Http.instance;
  }
}
