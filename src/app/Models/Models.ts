import { Area, Table } from './DbModels';

export class BaseResponse {
  Success: boolean;
  Msg: string;
  Data: object;
}
export class LoginModel {
  public Account: string;
  public Password: string;
}
export class AreaWithTables {
  public Area: Area;
  public Tables: Array<Table>;
}
