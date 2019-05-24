import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from 'src/app/Service/translate.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Point } from 'src/app/Models/Models';

@Component({
  selector: 'app-drag-menu',
  templateUrl: './drag-menu.component.html',
  styleUrls: ['./drag-menu.component.scss']
})
export class DragMenuComponent implements OnInit {
  @Input() DragBoundary: string;
  InitialPoint: Point;
  NowPoint: Point;
  offset = { x: 0, y: 0 };
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    try {
      if (localStorage.getItem('DragMenuPoint') === null) {
        localStorage.setItem('DragMenuPoint', JSON.stringify(new Point(0, 0)));
      }
      this.InitialPoint = JSON.parse(localStorage.getItem('DragMenuPoint'));
    } catch (error) {
      localStorage.setItem('DragMenuPoint', JSON.stringify(new Point(0, 0)));
      this.InitialPoint = JSON.parse(localStorage.getItem('DragMenuPoint'));
    }
  }

  ChangLang(Lang: string) {
    this.translateService.Use(Lang);
  }
  dragEnded(event: CdkDragEnd) {
    this.offset = { ...(event.source._dragRef as any)._passiveTransform };
    this.NowPoint = new Point(this.InitialPoint.X + this.offset.x, this.InitialPoint.Y + this.offset.y);
    localStorage.setItem('DragMenuPoint', JSON.stringify(this.NowPoint));
  }
}
