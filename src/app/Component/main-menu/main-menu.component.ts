import { FunctionButton } from './../../Models/DbModels';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
// import { TableSettingComponent } from '../data-setting/table-setting/table-setting.component';
import { FunctionButtonService } from 'src/app/Service/function-button.service';
import { BaseResponse } from 'src/app/Models/Models';
import { DataSettingComponent } from '../data-setting/data-setting.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  // @Inject(MAT_DIALOG_DATA) public data: DialogDatapublic dialogRef: MatDialogRef<MainMenuComponent>
  constructor(private fbs: FunctionButtonService, private matDialog: MatDialog) { }
  bts: FunctionButton[];
  ngOnInit() {
    this.fbs.GetFunctionButtons().subscribe((x: BaseResponse) => {
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
        this.matDialog.open(DataSettingComponent, {
          id: 'dialog2'
        });
        break;
    }
  }
}
