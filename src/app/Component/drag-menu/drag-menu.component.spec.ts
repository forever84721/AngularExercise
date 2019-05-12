import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragMenuComponent } from './drag-menu.component';

describe('DragMenuComponent', () => {
  let component: DragMenuComponent;
  let fixture: ComponentFixture<DragMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
