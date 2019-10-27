import { TestBed } from '@angular/core/testing';

import { AuthComponentDetectorService } from './auth-component-detector.service';

describe('AuthComponentDetectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthComponentDetectorService = TestBed.get(AuthComponentDetectorService);
    expect(service).toBeTruthy();
  });
});
