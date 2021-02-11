import { Component, OnInit } from '@angular/core';
// import { RestService } from '../../services/rest.service';
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
  //       return data;
  //     });
  // }

  // obtenerUnaEmpresa(id: any) {
  //   this.restService.getOneEnterprise(this.token, id)
  //     .then(data => {
  //       this.enterprise = data;
  //     });
  // }

  // obtenerOfertasPub(){
  //   for(let i = 0; i<this.offers.length;i++){
  //     let enterprise = this.obtenerUnaEmpresa(this.offers[i].enterpriseId);
  //     if (enterprise.type == "Pub"){
  //       this.offersPub.push(this.offers[i]);
  //     }
  //   }
  // }

}
