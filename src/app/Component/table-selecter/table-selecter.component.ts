import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/Service/table.service';
import { Area } from 'src/app/Models/Models';
import { BaseResponse } from 'src/app/Models/BaseResponse';

@Component({
  selector: 'app-table-selecter',
  templateUrl: './table-selecter.component.html',
  styleUrls: ['./table-selecter.component.scss']
})
export class TableSelecterComponent implements OnInit {

  constructor(private tableService: TableService) { }
  AreaList: Array<Area>;
  ngOnInit() {
    this.tableService.GetArea().toPromise().then((x: BaseResponse) => {
      if (!x.success) {
        alert(x.msg);
      } else {
        console.log(x.data);
        this.AreaList = x.data as Array<Area>;
      }
    });
    // this.AreaList=
  }

}
