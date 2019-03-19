import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadiscoveryComponent } from './datadiscovery.component';

describe('DatadiscoveryComponent', () => {
  let component: DatadiscoveryComponent;
  let fixture: ComponentFixture<DatadiscoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadiscoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
