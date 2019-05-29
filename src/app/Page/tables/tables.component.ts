import { MainMenuComponent } from './../../Component/main-menu/main-menu.component';
import { TranslateService } from './../../Service/translate.service';
import { TableService } from 'src/app/Service/table.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private tableService: TableService, private translateService: TranslateService, private matDialog: MatDialog) { }
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
    this.matDialog.open(MainMenuComponent, {
      id: 'dialog1'
    });
  }
  TableClick(TableId: string) {
    console.log('app-table-selecter:' + TableId);

    this.router.navigate(['../Order']);
  }
}
