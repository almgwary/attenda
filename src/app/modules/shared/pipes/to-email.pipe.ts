import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toEmail'
})
export class ToEmailPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    value+= `@example.com`;
    return value;
  }

}
