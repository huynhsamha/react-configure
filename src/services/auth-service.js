import Env from './../environments';

export class AuthService {

  static baseUrl() { return Env.baseUrl; }
  static parseUrl(url) { return AuthService.baseUrl() + url; }

}

export default AuthService;
