import { Component, OnInit, Input } from '@angular/core';
import { Table } from 'src/app/Models/DbModels';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() TableData: Table;
  @Input() DragBoundary: string;
  InitialPoint: Point;
  NowPoint: Point;
  offset = { x: 0, y: 0 };
  constructor() { }
  ngOnInit() {
    this.InitialPoint = new Point(this.TableData.X, this.TableData.Y);
  }
  dragEnded(event: CdkDragEnd) {
    // console.log(event);
    // console.log((event.source._dragRef as any)._previewRect);
    this.offset = { ...(event.source._dragRef as any)._passiveTransform };
    console.log(this.offset);
    this.NowPoint = new Point(this.InitialPoint.X + this.offset.x, this.InitialPoint.Y + this.offset.y);
    console.log(this.NowPoint);
    this.TableData.X = this.NowPoint.X;
    this.TableData.Y = this.NowPoint.Y;
  }
}
class Point {
  X: number;
  Y: number;
  constructor(X: number, Y: number) {
    this.X = X;
    this.Y = Y;
  }
  Add(X: number, Y: number) {
    this.X += X;
    this.Y += Y;
  }
}
