import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CategoryPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it.title.toLowerCase().includes(terms); // only filter country name
    });
  }
}
