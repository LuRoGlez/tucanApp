import { Component, OnInit } from '@angular/core';
// import { RestService } from '../../services/rest.service';
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
  offersDicotheque: any;

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

  // obtenerOfertasDiscoteca(){
  //   for(let i = 0; i<this.offers.length;i++){
  //     let enterprise = this.obtenerUnaEmpresa(this.offers[i].enterpriseId);
  //     if (enterprise.type == "Disco"){
  //       this.offersDicotheque.push(this.offers[i]);
  //     }
  //   }
  // }

}
