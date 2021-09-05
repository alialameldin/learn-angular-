import { TestBed } from '@angular/core/testing';

import { PrefrenceGuard } from './prefrence.guard';

describe('PrefrenceGuard', () => {
  let guard: PrefrenceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrefrenceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
