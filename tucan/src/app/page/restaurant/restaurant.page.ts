import { Component, Input, OnInit, Pipe } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../../services/rest.service';
import { OfferPage } from '../offer/offer.page';
import { Offer } from '../../models/offer.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  offersfiltered: Offer[] = [];
  token: any;
  textoBuscar = '';

  imagen = "https://allsites.es/tucanapp/public/logos/";

  constructor(public modalController: ModalController, 
              public restService: RestService,
              public router:Router) { }
                  
  ngOnInit() { 
    this.getOffersRestaurant();
  }
                  
  ionViewWillEnter() {
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

  getOffersRestaurant() {
    if(this.restService.token.success.token != null){
      this.restService.getOffersRestaurant(this.restService.token.success.token)
        .then(data => {
          this.offersfiltered = data.Ofertas.filter((offer) => {
            return (offer.restaurant != null);
          });
          console.log(this.offersfiltered);
        });
    } 
  }

  buscarOferta(event) {
    const ciudad = event.target.value;
    this.textoBuscar = ciudad;
  }

  mostrarOfertasMapa() {
    this.restService.offersfiltered = this.offersfiltered;
    this.router.navigate(['/mapa-todos']);
  }
}
