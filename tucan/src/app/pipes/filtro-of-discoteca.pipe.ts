import { Pipe, PipeTransform } from '@angular/core';
import { Offer } from '../models/offer.model';

@Pipe({
  name: 'filtroOfDiscoteca'
})
export class FiltroOfDiscotecaPipe implements PipeTransform {

  transform(ofertas: Offer[], texto: string): Offer[] {
    if (texto.length === 0) {
      return ofertas;
    }

    texto = texto.toLocaleLowerCase();

    return ofertas.filter(oferta => {
      return oferta.discotheque.city.toLocaleLowerCase().includes(texto);
    });
  }
}
