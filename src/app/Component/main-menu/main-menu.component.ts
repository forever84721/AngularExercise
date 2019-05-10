import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  // @Inject(MAT_DIALOG_DATA) public data: DialogDatapublic dialogRef: MatDialogRef<MainMenuComponent>
  constructor() { }

  ngOnInit() {
  }

}
