import { TestBed } from '@angular/core/testing';

import { DatosPersonalService } from './datos-personal.service';

describe('DatosPersonalService', () => {
  let service: DatosPersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
