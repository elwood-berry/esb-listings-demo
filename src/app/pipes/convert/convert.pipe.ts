/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnits: string): any {
    // LOG VALUES
    console.log('Piped Value', value);

    // IF THERE IS NO VALUE.
    if (!value) {
      return '';
    }

    // SWITCH.
    switch (targetUnits) {
      case 'a':
        return value + 100;
      case 'b':
        return value + 200;
      case 'c':
        return value + 300;
      default:
        return value + 1;
    }

    return value + 20;
  }
}
