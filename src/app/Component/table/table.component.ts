import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Table } from 'src/app/Models/DbModels';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Point } from 'src/app/Models/Models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() TableData: Table;
  @Input() DragBoundary: string;
  @Output() TableClickEmitter = new EventEmitter(); // : EventEmitter<string>
  InitialPoint: Point;
  NowPoint: Point;
  offset = { x: 0, y: 0 };
  constructor() { }
  ngOnInit() {
    this.InitialPoint = new Point(this.TableData.X, this.TableData.Y);
  }
  dragEnded(event: CdkDragEnd) {
    this.offset = { ...(event.source._dragRef as any)._passiveTransform };
    this.NowPoint = new Point(this.InitialPoint.X + Math.round(this.offset.x), this.InitialPoint.Y + Math.round(this.offset.y));
    this.TableData.X = Math.round(this.NowPoint.X);
    this.TableData.Y = Math.round(this.NowPoint.Y);
  }
  TableClick($event: Event) {
    this.TableClickEmitter.emit($event);
  }
}
