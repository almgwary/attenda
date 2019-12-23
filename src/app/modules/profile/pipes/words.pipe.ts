import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'words'
})
export class WordsPipe implements PipeTransform {


  transform(value: string): string | boolean {
    if (value) {
      const words = value.split(' ');
      let result = '';
      if ( words.length > 0 ) {
        result += words[0];
      }
      if ( words.length > 1 ) {
        result += words[1];

      }
      return result ;
    }
    return false;
  }

}
