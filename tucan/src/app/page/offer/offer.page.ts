import { Component, Input, OnInit } from '@angular/core';
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
  enterprise: any

  constructor() {
    
  }

  ngOnInit() {
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
