import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ModalController } from '@ionic/angular';
import { OfferPage } from '../offer/offer.page';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.page.html',
  styleUrls: ['./pub.page.scss'],
})
export class PubPage implements OnInit {

  offers: any;
  token: any;
  offersPub: any;

  constructor(public modalController: ModalController, public restService: RestService) {
    
  }

  ngOnInit() {
    this.getOffersBar()
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

  // hacerLogin() {
  //   this.restService.login()
  //     .then(data => {
  //       this.token = data;
  //     });
  // }

  getOffersBar() {
    if(this.restService.token.success.token != null){
      this.restService.getOffersBar(this.restService.token.success.token)
      .then(data => {
        this.offers = data.Ofertas;
      });
    }
  }


}
