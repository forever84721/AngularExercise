import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AreaWithTables } from '../Models/Models';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  public AreaWithTablesList: AreaWithTables[] = [];
  constructor(private httpclient: HttpClient) { }
  GetAreaWithTables() {
    return this.httpclient.get(`${environment.apiUrl}Table/GetAreaWithTables`);
  }
  UpdateAreaWithTables() {
    this.httpclient.post(`${environment.apiUrl}Table/UpdateAreaWithTables`, this.AreaWithTablesList).subscribe();
  }
}
