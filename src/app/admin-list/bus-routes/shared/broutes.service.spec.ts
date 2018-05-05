import { TestBed, inject } from '@angular/core/testing';

import { BroutesService } from './broutes.service';

describe('BroutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroutesService]
    });
  });

  it('should be created', inject([BroutesService], (service: BroutesService) => {
    expect(service).toBeTruthy();
  }));
});
