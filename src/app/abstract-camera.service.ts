import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DesktopCameraService } from './desktop-camera.service';
import { MobileCameraService } from './mobile-camera.service';


@Injectable({
  providedIn: 'root'
})
export class AbstractCameraService {

  constructor() { }
}
