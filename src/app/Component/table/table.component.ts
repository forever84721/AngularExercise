import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableName: string;
  @Input() DragBoundary: string;
  @Input() Round: boolean;
  constructor() { }
  ngOnInit() {
  }

}
