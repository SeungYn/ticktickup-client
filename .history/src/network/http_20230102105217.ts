class Http {
  private static instance: Http;
  constructor(private baseURL: string) {}

  public static getHttpInstance() {
    if (!Http.instance) {
      Http.instance = new Http(process.env.REACT_APP_BASE_URL);
    }
  }
}

export {};
