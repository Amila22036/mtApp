import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrouteComponent } from './broute.component';

describe('BrouteComponent', () => {
  let component: BrouteComponent;
  let fixture: ComponentFixture<BrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
