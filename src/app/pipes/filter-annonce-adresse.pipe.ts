import { Pipe, PipeTransform } from '@angular/core';
import { Annonce } from '../model';

@Pipe({
  name: 'filterAnnonceAdresse'
})
export class FilterAnnonceAdressePipe implements PipeTransform {

  transform(value: Array<Annonce>, adresse?: string): Array<Annonce> {
    if (!adresse) {
      return null
    }
    return value.filter(v => {return v.adresseDepart.toLowerCase().includes(adresse.toLowerCase())})
  }

}
