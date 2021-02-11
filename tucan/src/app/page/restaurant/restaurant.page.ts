import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { RestService } from '../../services/rest.service';
import { OfferPage } from '../offer/offer.page';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  lista: Array<any> = [
    {
      titulo: "Juan",
      id: 726476765,
      descripcion: "Ofertakdfkjfjfjdjf",
      valoracion: 4,
      imagen: "sijfijfijdj",
      restaurant: {
        nombre: "Restaurant",
      },
    },{
      titulo: "Antonio",
      id: 2,
      restaurant: null,
    }
  ]

  offers: any;
  token: any;


  buscador = true;

  constructor(public modalController: ModalController) {
    
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

  // hacerLogin() {
  //   this.restService.login()
  //     .then(data => {
  //       this.token = data;
  //     });
  // }

  // obtenerOfertas() {
  //   this.restService.getOffers(this.token)
  //     .then(data => {
  //       this.offers = data;
  //     });
  // }

}
