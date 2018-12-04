import { TestBed } from '@angular/core/testing';

import { AbstractCameraService } from './abstract-camera.service';

describe('AbstractCameraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractCameraService = TestBed.get(AbstractCameraService);
    expect(service).toBeTruthy();
  });
});
