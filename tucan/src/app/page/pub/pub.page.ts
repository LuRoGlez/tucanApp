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

  imagen = "https://allsites.es/tucanapp/public/logos/";

  constructor(public modalController: ModalController, public restService: RestService) {
    
  }

  ngOnInit() {
    this.getOffersBar();
  }

  async presentModal(nombre, titulo, descripcion, imagen, valoracion, idOferta, musicaDirecto, deporteDirecto) {
    const modal = await this.modalController.create({
      component: OfferPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'nombreEmpresa': nombre,
        'TituloOferta': titulo,
        'DescripcionOferta': descripcion,
        'ImagenEmpresa': imagen,
        'ValoracionOferta': valoracion,
        'idOferta': idOferta,
        'musicaDirecto': musicaDirecto,
        'deporteDirecto': deporteDirecto
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
        console.log(data);
      });
    }
  }


}
