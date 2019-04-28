import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor() { }
  Time = '156515';
  ngOnInit() {
    setInterval(() => this.UpdateTime(), 1000);
    this.Time = Date.now().toString();
  }
  UpdateTime() {
    this.Time = Date.now().toString();
  }
}
