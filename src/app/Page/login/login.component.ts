import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() LoginModel = new LoginModel();
  // @Input() testText: string='';
  constructor() { }

  ngOnInit() {
  }
  Login(): void {
    console.log(this.LoginModel);
    alert(this.LoginModel);
  }
}
class LoginModel {
  public Account: string;
  public Password: string;
}
