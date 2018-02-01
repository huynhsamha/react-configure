import Env from './../environments';

export class AuthService {

    static baseUrl = Env.baseUrl;
    static parseUrl = (url) => AuthService.baseUrl + url;
    
}

export default AuthService;