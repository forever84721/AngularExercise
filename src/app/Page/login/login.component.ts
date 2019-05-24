import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
import { BaseResponse, LoginModel } from 'src/app/Models/Models';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginModel = new LoginModel();
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {
    setTimeout(() => {
      // tslint:disable-next-line: no-unused-expression
      (document.getElementsByTagName('body') as any).click;
    }, 1000);
  }
  Login(): void {
    this.authService.Login(this.LoginModel).subscribe((x: BaseResponse) => {
      if (!x.Success) {
        alert(x.Msg);
      } else {
        this.authService.isLoggedIn = true;
        AuthService.JWTToken = x.Data as unknown as string;
        // console.log(AuthService.JWTToken);
        this.router.navigate(['../Tables']);
      }
    });
  }
  // get Account() { return this.LoginModel.Account; }
  // get Password() { return this.LoginModel.Password; }
}

