import { Component, OnInit, Input } from '@angular/core';
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
    this.LoginModel.Account = '132132';
    this.LoginModel.Password = '132132';
  }
  ngOnInit() {

  }
  Login(): void {
    this.authService.Login(this.LoginModel).subscribe((x: BaseResponse) => {
      if (!x.Success) {
        alert(x.Msg);
      } else {
        this.authService.isLoggedIn = true;
        AuthService.JWTToken = x.Data as unknown as string;
        console.log(AuthService.JWTToken);
        this.router.navigate(['../Tables']);
      }
    });
  }
  // get Account() { return this.LoginModel.Account; }
  // get Password() { return this.LoginModel.Password; }
}

