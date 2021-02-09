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
  offersPub: any;

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
