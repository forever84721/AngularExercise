import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/Service/table.service';
import { BaseResponse, AreaWithTables } from 'src/app/Models/Models';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Table } from 'src/app/Models/DbModels';

@Component({
  selector: 'app-table-selecter',
  templateUrl: './table-selecter.component.html',
  styleUrls: ['./table-selecter.component.scss']
})
export class TableSelecterComponent implements OnInit {

  constructor(private tableService: TableService) { }
  // AreaWithTablesList = new BehaviorSubject<Array<AreaWithTables>>(new Array<AreaWithTables>());
  AreaWithTablesList: BehaviorSubject<AreaWithTables[]> = new BehaviorSubject([]);
  NowAreaId: string;
  zxc: Table[];
  ngOnInit() {
    this.AreaWithTablesList.subscribe((x) => {
      this.NowAreaId = this.NowAreaId ? x[0].Area.AreaId : this.NowAreaId;
      const xc = x.find(a => a.Area.AreaId === this.NowAreaId);
      this.zxc = xc ? xc.Tables : [];
    });
    // combineLatest(this.AreaWithTablesList, this.NowAreaId).subscribe(([AreaWithTablesList, y]) => {
    //   if (AreaWithTablesList.length === 0) {
    //     return;
    //   }
    //   this.NowAreaId = AreaWithTablesList[0].Area.AreaId;
    //   const xc = AreaWithTablesList.find(a => a.Area.AreaId === y);
    //   this.zxc = xc ? xc.Tables : [];
    // });
    this.tableService.GetAreaWithTables().subscribe((x: BaseResponse) => {
      if (!x.Success) {
        alert(x.Msg);
      } else {
        const data = x.Data as Array<AreaWithTables>;
        this.AreaWithTablesList.next(data);
        // this.NowAreaId.next(this.AreaWithTablesList.getValue()[0].Area.AreaId);
      }
    });
  }
}
