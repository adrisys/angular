import { TestBed } from '@angular/core/testing';

import { EspaciosService } from './espacios.service';

describe('EspaciosService', () => {
  let service: EspaciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspaciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
