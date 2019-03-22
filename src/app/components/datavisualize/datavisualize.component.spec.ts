import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatavisualizeComponent } from './datavisualize.component';

describe('DatavisualizeComponent', () => {
  let component: DatavisualizeComponent;
  let fixture: ComponentFixture<DatavisualizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatavisualizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatavisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
