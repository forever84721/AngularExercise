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
export class Point {
  X: number;
  Y: number;
  constructor(X: number, Y: number) {
    this.X = X;
    this.Y = Y;
  }
  Add(X: number, Y: number) {
    this.X += X;
    this.Y += Y;
  }
}
