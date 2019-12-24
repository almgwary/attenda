import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailTo'
})
export class EmailToPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `
    <a href="mailto:${value}">
         ${value} 
    </a>`;
  }

}
