import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ModalController } from '@ionic/angular';
import { OfferPage } from '../offer/offer.page';

@Component({
  selector: 'app-discotheque',
  templateUrl: './discotheque.page.html',
  styleUrls: ['./discotheque.page.scss'],
})
export class DiscothequePage implements OnInit {
  
  offers: any;
  token: any;

  constructor(public modalController: ModalController, public restService: RestService) { 
    this.getOffersDiscotheque()
  }

  ngOnInit() {
  }

  async presentModal(nombre, titulo, descripcion, imagen, valoracion) {
    const modal = await this.modalController.create({
      component: OfferPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'nombreEmpresa': nombre,
        'TituloOferta': titulo,
        'DescripcionOferta': descripcion,
        'ImagenEmpresa': imagen,
        'ValoracionOferta': valoracion
      }
    });
    return await modal.present();
  }

  getOffersDiscotheque() {
    if(this.restService.token.success.token != null){
      this.restService.getOffersDicotheque(this.restService.token.success.token)
      .then(data => {
        this.offers = data.Ofertas;
      });
    }
    
  }


}
