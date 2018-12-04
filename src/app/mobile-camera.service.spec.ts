import { TestBed } from '@angular/core/testing';

import { MobileCameraService } from './mobile-camera.service';

describe('MobileCameraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileCameraService = TestBed.get(MobileCameraService);
    expect(service).toBeTruthy();
  });
});
