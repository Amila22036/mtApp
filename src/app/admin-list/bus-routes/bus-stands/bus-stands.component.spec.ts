import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusStandsComponent } from './bus-stands.component';

describe('BusStandsComponent', () => {
  let component: BusStandsComponent;
  let fixture: ComponentFixture<BusStandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusStandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusStandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
