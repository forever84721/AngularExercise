import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TableService } from 'src/app/Service/table.service';
import { BaseResponse, AreaWithTables } from 'src/app/Models/Models';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Table } from 'src/app/Models/DbModels';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table-selecter',
  templateUrl: './table-selecter.component.html',
  styleUrls: ['./table-selecter.component.scss']
})
export class TableSelecterComponent implements OnInit {
  constructor(public tableService: TableService) { }
  // AreaWithTablesList = new BehaviorSubject<Array<AreaWithTables>>(new Array<AreaWithTables>());
  // AreaWithTablesList: AreaWithTables[] = [];
  NowAreaId: BehaviorSubject<string> = new BehaviorSubject('');
  NowTables: Table[];
  @Output() TableClickEmitter = new EventEmitter();
  ngOnInit() {
    this.NowAreaId.subscribe((x) => {
      // this.NowAreaId = this.NowAreaId ? x[0].Area.AreaId : this.NowAreaId;
      const temp = this.tableService.AreaWithTablesList.find(a => a.Area.AreaId === x);
      this.NowTables = temp ? temp.Tables : [];
    });
    // combineLatest(this.AreaWithTablesList, this.NowAreaId).subscribe(([AreaWithTablesList, y]) => {
    //   if (AreaWithTablesList.length === 0) {
    //     return;
    //   }
    //   this.NowAreaId = AreaWithTablesList[0].Area.AreaId;
    //   const xc = AreaWithTablesList.find(a => a.Area.AreaId === y);
    //   this.zxc = xc ? xc.Tables : [];
    // });
    if (this.tableService.AreaWithTablesList.length === 0) {
      this.tableService.GetAreaWithTables().subscribe((x: BaseResponse) => {
        if (!x.Success) {
          alert(x.Msg);
        } else {
          const data = x.Data as Array<AreaWithTables>;
          this.tableService.AreaWithTablesList = data;
          this.tableService.AreaIndex = 0;
          this.NowAreaId.next(data[this.tableService.AreaIndex].Area.AreaId);
        }
      });
    } else {
      this.NowAreaId.next(this.tableService.AreaWithTablesList[this.tableService.AreaIndex].Area.AreaId);
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tableService.AreaWithTablesList, event.previousIndex, event.currentIndex);
  }
  TableClick(TableId: string) {
    this.TableClickEmitter.emit(TableId);
  }
}
