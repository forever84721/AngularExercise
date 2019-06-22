import { Component, OnInit } from '@angular/core';
import { BaseResponse, AreaWithTables } from 'src/app/Models/Models';
import { TableService } from 'src/app/Service/table.service';
import { Area, Table } from 'src/app/Models/DbModels';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-setting',
  templateUrl: './table-setting.component.html',
  styleUrls: ['./table-setting.component.scss']
})
export class TableSettingComponent implements OnInit {
  NowEditAreaId: string;
  AreadisplayedColumns: string[] = ['AreaId', 'AreaName', 'Seq'];
  Areas: MatTableDataSource<Area>;
  Tables: MatTableDataSource<Table>;
  constructor(public tableService: TableService) { }

  ngOnInit() {
    this.tableService.GetAreaWithTables().subscribe((x: BaseResponse) => {
      if (!x.Success) {
        alert(x.Msg);
      } else {
        this.tableService.AreaWithTablesList = x.Data as Array<AreaWithTables>;
        // tslint:disable-next-line: prefer-const
        let Temp: Area[] = [];
        this.tableService.AreaWithTablesList.forEach((item) => {
          Temp.push(item.Area);
        });
        console.log(Temp);
        this.Areas = new MatTableDataSource<Area>(Temp);
      }
    });
  }
  RowClick(row: Area) {
    console.log(row);
  }
  RowdblClick(row: Area) {
    this.NowEditAreaId = row.AreaId;
    console.log('RowdblClick', this.NowEditAreaId);
  }
}
