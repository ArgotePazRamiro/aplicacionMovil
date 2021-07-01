import { TestBed } from '@angular/core/testing';

import { DatosStockService } from './datos-stock.service';

describe('DatosStockService', () => {
  let service: DatosStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
