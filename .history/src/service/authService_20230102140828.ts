export {};
import Http, { HttpInterface } from '../network/http';
export default class AuthService {
  private static instance: AuthService;

  private constructor(private http: HttpInterface) {}

  async signup(username: string, password: string) {
    await this.http.fetch('/auth/signup', {
      method: 'POST',
      data: JSON.stringify({ username, password }),
    });
  }

  public static getHttpInstance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService(Http.getHttpInstance());
    }
    return AuthService.instance;
  }
}
