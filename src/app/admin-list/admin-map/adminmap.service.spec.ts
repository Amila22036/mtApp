import { TestBed, inject } from '@angular/core/testing';

import { AdminmapService } from './adminmap.service';

describe('AdminmapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminmapService]
    });
  });

  it('should be created', inject([AdminmapService], (service: AdminmapService) => {
    expect(service).toBeTruthy();
  }));
});
