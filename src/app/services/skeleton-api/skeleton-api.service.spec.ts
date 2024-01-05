import { TestBed } from '@angular/core/testing';

import { SkeletonApiService } from './skeleton-api.service';

describe('SkeletonApiService', () => {
  let service: SkeletonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkeletonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
