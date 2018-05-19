import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlacesComponent } from './manage-places.component';

describe('ManagePlacesComponent', () => {
  let component: ManagePlacesComponent;
  let fixture: ComponentFixture<ManagePlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
