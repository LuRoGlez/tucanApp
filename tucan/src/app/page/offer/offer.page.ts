import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  @Input() offerId: any;
  token: any;
  offer: any;
  enterprise: any;

  constructor(public modalCtrl: ModalController) {
    
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  // obtenerUnaOferta(id: any) {
  //   this.restService.getOneOffer(this.token, id)
  //     .then(data => {
  //       this.offer = data;
  //   });
  // }

  // hacerLogin() {
  //   this.restService.login()
  //     .then(data => {
  //       this.token = data;
  //     });
  // }

  // obtenerUnaEmpresa(id: any) {
  //   this.restService.getOneEnterprise(this.token, id)
  //     .then(data => {
  //       this.enterprise = data;
  //     });
  // }

}
