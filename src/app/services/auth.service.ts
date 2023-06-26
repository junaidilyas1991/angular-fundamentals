import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import {JwtHelper, tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post<any>('/api/authenticate', credentials).pipe(
      map((response) => {
        let result = response;
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    /*let token = localStorage.getItem('token')
    let jwtHelper = new JwtHelper();

    if(!token)
      return false;

    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token)

    return !isExpired;*/

    // return tokenNotExpired();

    return true
  }



  get currentUser() {
    let token = localStorage.getItem('token');
    if(!token) return null;

    return true;
    // return new JwtHelper().decodeToken(token);

  }



}
