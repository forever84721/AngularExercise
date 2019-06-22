import { Component, OnInit } from '@angular/core';
import { FunctionButton } from 'src/app/Models/DbModels';
import { FunctionButtonService } from 'src/app/Service/function-button.service';
import { MatDialog } from '@angular/material';
import { BaseResponse } from 'src/app/Models/Models';
import { TableSettingComponent } from './table-setting/table-setting.component';

@Component({
  selector: 'app-data-setting',
  templateUrl: './data-setting.component.html',
  styleUrls: ['./data-setting.component.scss']
})
export class DataSettingComponent implements OnInit {

  constructor(private fbs: FunctionButtonService, private matDialog: MatDialog) { }
  bts: FunctionButton[];
  ngOnInit() {
    this.fbs.GetDataSettingButtons().subscribe((x: BaseResponse) => {
      if (x.Success) {
        this.bts = x.Data as FunctionButton[];
      } else {
        alert(x.Msg);
      }
    });
  }
  FunctionButtonClick(Id: number) {
    switch (Id) {
      case 1:
        this.matDialog.open(TableSettingComponent);
        break;
    }
  }
}
