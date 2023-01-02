import { AxiosPromise, AxiosResponse } from 'axios';
import Http, { HttpInterface } from '../network/http';
export default class AuthService {
  private static instance: AuthService;

  private constructor(private http: HttpInterface) {}

  async signup(username: string, password: string): Promise<AxiosResponse> {
    const data = await this.http.fetch('/auth/signup', {
      method: 'POST',
      data: JSON.stringify({ username, password }),
    });
    console.log('data', data);
    return data;
  }

  public static getHttpInstance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService(Http.getHttpInstance());
    }
    return AuthService.instance;
  }
}
