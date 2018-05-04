import { Pipe, PipeTransform } from '@angular/core';
import { Annonce } from '../model';

@Pipe({
  name: 'filterAnnonceDate'
})
export class FilterAnnonceDatePipe implements PipeTransform {

  transform(value: Array<Annonce>, date?: Date): Array<Annonce> {
    if (!date) {
      return value
    }
    return value.filter(v => {return v.date.toLocaleDateString() == date.toLocaleDateString()})
  }
}
