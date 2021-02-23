import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../../services/rest.service';
import { OfferPage } from '../offer/offer.page';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {


  offers: any;
  token: any;


  buscador = true;

  constructor(public modalController: ModalController, public restService: RestService) {
    this.getOffersRestaurant()
  }

  ngOnInit() {
    
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

  getOffersRestaurant() {
    if(this.restService.token.success.token != null){
      this.restService.getOffersRestaurant(this.restService.token.success.token)
        .then(data => {
          this.offers = data.Ofertas;
        });
    } 
  }

}
