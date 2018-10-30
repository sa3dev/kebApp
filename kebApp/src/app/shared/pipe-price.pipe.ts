import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price', pure: false
})
export class PricePipe implements PipeTransform {



  transform(num) {

      const euros = num / 100;
      euros.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
      const montant = euros + " €"
      return montant;

  }
  
}