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

  offers: any;
  offersRestaurant:any;
  token: any;

  offerIdRestaurant: any;
  enterpriseIdRestaurant: any;

  buscador = true;

  constructor(public modalController: ModalController) {
    
  }

  ngOnInit() {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: OfferPage,
      cssClass: 'my-custom-class'
      // componentProps: {
      //   'offerId': offerIdRestaurant,
      //   'enterpriseId': enterpriseIdRestaurant
      // }
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

  // obtenerUnaEmpresa(id: any) {
  //   this.restService.getOneEnterprise(this.token, id)
  //     .then(data => {
  //       return data;
  //     });
  // }

    // obtenerOfertasRestaurante(){
    //   for(let i = 0; i<this.offers.length;i++){
    //     let enterprise = this.obtenerUnaEmpresa(this.offers[i].enterpriseId);
    //     if (enterprise.type == "Restaurant"){
    //       this.offersRestaurant.push(this.offers[i]);
    //     }
    //   }
    // }


}
