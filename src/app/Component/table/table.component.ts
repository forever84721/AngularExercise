import { Component, OnInit, Input } from '@angular/core';
import { Table } from 'src/app/Models/DbModels';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() TableData: Table;
  @Input() DragBoundary: string;
  constructor() { }
  ngOnInit() {
  }
  // tslint:disable-next-line: ban-types
  // styleObject(): Object {
  //   console.log(this.TableData.Height);
  //   return { height: this.TableData.Height, width: this.TableData.Width }
  // }
}
