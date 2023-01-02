export {};
import Http, { HttpInterface } from '../network/http';
export default class AuthService {
  private static instance: AuthService;

  private constructor(private http: HttpInterface) {}

  public static getHttpInstance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService(Http.getHttpInstance());
    }
    return AuthService.instance;
  }
}
