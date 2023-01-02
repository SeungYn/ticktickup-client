import axios, {
  AxiosInstance,
  AxiosInterceptorOptions,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export interface HttpInterface {
  fetch: (url: string, options: AxiosRequestConfig) => Promise<AxiosResponse>;
}

export default class Http implements HttpInterface {
  private static instance: Http;
  private readonly client: AxiosInstance;
  private constructor(baseURL: string) {
    this.client = axios.create({
      baseURL: baseURL,
      withCredentials: true,
    });
  }

  async fetch(
    url: string,
    options: AxiosRequestConfig
  ): Promise<AxiosResponse> {
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

const a: HttpInterface = Http.getHttpInstance();
