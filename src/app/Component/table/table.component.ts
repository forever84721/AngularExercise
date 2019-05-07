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
    //   let element = event.source.getRootElement();
    // let boundingClientRect = element.getBoundingClientRect();
    // let parentPosition = this.getPosition(element);
    // console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));        

  }
  // getPosition(el) {
  //   let x = 0;
  //   let y = 0;
  //   while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
  //     x += el.offsetLeft - el.scrollLeft;
  //     y += el.offsetTop - el.scrollTop;
  //     el = el.offsetParent;
  //   }
  //   return { top: y, left: x };
  // }
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
