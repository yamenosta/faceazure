import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'platformInformation'
})
export class PlatformInformationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
