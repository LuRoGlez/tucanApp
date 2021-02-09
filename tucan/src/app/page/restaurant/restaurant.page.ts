import { Component, Input, OnInit } from '@angular/core';
// import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  offers: any;
  token: any;
  enterprise: any

  buscador = true;

  constructor() {
    
  }

  ngOnInit() {

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
  //       this.enterprise = data;
  //     });
  // }

  


}
