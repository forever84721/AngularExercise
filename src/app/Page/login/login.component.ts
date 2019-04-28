import { Component, OnInit, Input } from '@angular/core';
import { LoginModel } from '../../Models/LoginModel';
import { AuthService } from 'src/app/Service/auth.service';
import { BaseResponse } from 'src/app/Models/BaseResponse';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() LoginModel = new LoginModel();
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
  }
  Login(): void {
    this.authService.Login(this.LoginModel).toPromise().then((x: BaseResponse) => {
      if (!x.success) {
        alert(x.msg);
      } else {
        console.log(x.data);
        this.authService.isLoggedIn = true;
        this.router.navigate(['../Tables']);
      }
    });
  }
}

