import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../Models/LoginModel';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpclient: HttpClient) { }
  isLoggedIn = false;
  redirectUrl: string;
  Login(model: LoginModel) {
    return this.httpclient.post(`${environment.apiUrl}Auth/Login`, model);
  }
  Logout(): void {
    this.isLoggedIn = false;
  }
}
