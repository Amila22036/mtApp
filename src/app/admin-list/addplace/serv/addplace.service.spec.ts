import { TestBed, inject } from '@angular/core/testing';

import { AddplaceService } from './addplace.service';

describe('AddplaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddplaceService]
    });
  });

  it('should be created', inject([AddplaceService], (service: AddplaceService) => {
    expect(service).toBeTruthy();
  }));
});
