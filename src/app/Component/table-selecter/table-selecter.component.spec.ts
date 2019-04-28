import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelecterComponent } from './table-selecter.component';

describe('TableSelecterComponent', () => {
  let component: TableSelecterComponent;
  let fixture: ComponentFixture<TableSelecterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSelecterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSelecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
