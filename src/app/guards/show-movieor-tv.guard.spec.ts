import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { showMovieorTvGuard } from './show-movieor-tv.guard';

describe('showMovieorTvGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => showMovieorTvGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
