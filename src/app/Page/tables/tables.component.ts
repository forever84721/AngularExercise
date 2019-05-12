import { MainMenuComponent } from './../../Component/main-menu/main-menu.component';
import { TranslateService } from './../../Service/translate.service';
import { TableService } from 'src/app/Service/table.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private tableService: TableService, private translateService: TranslateService, private mainMenuDialog: MatDialog) { }
  Time = '';
  ngOnInit() {
    setInterval(() => this.UpdateTime(), 1000);
    this.Time = Date.now().toString();
  }
  UpdateTime() {
    this.Time = Date.now().toString();
  }
  UpdateTables(): void {
    this.tableService.UpdateAreaWithTables();
  }
  OpenFunMenu() {
    this.mainMenuDialog.open(MainMenuComponent);
  }
  TableClick(TableId: string) {
    alert('app-table-selecter:' + TableId);
  }
}
