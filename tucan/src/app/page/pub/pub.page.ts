import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ModalController } from '@ionic/angular';
import { OfferPage } from '../offer/offer.page';
import { Offer } from '../../models/offer.model';
@Component({
  selector: 'app-pub',
  templateUrl: './pub.page.html',
  styleUrls: ['./pub.page.scss'],
})
export class PubPage implements OnInit {

  offersfiltered: Offer[] = [];
  // offers: Offer[] = [];
  token: any;
  textoBuscar = '';

  imagen = "https://allsites.es/tucanapp/public/logos/";

  constructor(public modalController: ModalController,
              public restService: RestService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getOffersBar();
  }

  async presentModal(nombre, latitud, longitud, titulo, descripcion, imagen, valoracion, idOferta, musicaDirecto, deporteDirecto) {
    const modal = await this.modalController.create({
      component: OfferPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'nombreEmpresa': nombre,
        'latitudEmpresa': latitud,
        'longitudEmpresa': longitud,
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

  getOffersBar() {
    if(this.restService.token.success.token != null){
      this.restService.getOffersBar(this.restService.token.success.token)
      .then(data => {
        this.offersfiltered = data.Ofertas.filter((offer) => {
          return (offer.bar != null);
        });
        console.log(this.offersfiltered);
      });
    }
  }

  buscarOferta(event) {
    const ciudad = event.target.value;
    this.textoBuscar = ciudad;
  }
}
