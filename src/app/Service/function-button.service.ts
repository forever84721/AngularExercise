import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FunctionButtonService {

  constructor(private httpclient: HttpClient) { }
  GetFunctionButtons() {
    return this.httpclient.get(`${environment.apiUrl}FunctionButton/GetFunctionButtons`);
  }
  GetDataSettingButtons() {
    return this.httpclient.get(`${environment.apiUrl}FunctionButton/GetDataSettingButtons`);
  }
}
