import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplaceListComponent } from './addplace-list.component';

describe('AddplaceListComponent', () => {
  let component: AddplaceListComponent;
  let fixture: ComponentFixture<AddplaceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplaceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
