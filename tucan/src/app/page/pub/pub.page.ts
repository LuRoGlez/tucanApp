import { Component, OnInit } from '@angular/core';
// import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.page.html',
  styleUrls: ['./pub.page.scss'],
})
export class PubPage implements OnInit {

  offers: any;
  token: any;
  enterprise: any

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
