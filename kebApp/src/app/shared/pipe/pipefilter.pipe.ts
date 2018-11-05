import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class PipefilterPipe implements PipeTransform {

  transform(array, keyFilter, valueFilter): any {
    return array.filter(
      element => element[keyFilter] === valueFilter // | Filter: "categorie" : "H"
    );
  }

}
