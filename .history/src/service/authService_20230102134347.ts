export {};
import Http, { HttpIterface } from '../network/http';
export default class AuthService {
  private static instance: AuthService;

  private constructor(private http: HttpIterface) {}

  public static getHttpInstance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService(Http);
    }
  }
}
