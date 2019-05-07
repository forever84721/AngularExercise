import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../Models/Models';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpclient: HttpClient) { }
  public static JWTToken: string;
  isLoggedIn = false;
  redirectUrl: string;
  Login(model: LoginModel) {
    return this.httpclient.post(`${environment.apiUrl}Auth/Login`, model);
  }
  Logout(): void {
    this.isLoggedIn = false;
  }
}
