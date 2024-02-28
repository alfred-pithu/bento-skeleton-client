import { TestBed } from '@angular/core/testing';

import { PosMarketplaceOrdersService } from './pos-marketplace-orders.service';

describe('PosMarketplaceOrdersService', () => {
  let service: PosMarketplaceOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosMarketplaceOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
