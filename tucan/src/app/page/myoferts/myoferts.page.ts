import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { OfferEnterprise } from 'src/app/models/offer_enterprise.model';

@Component({
  selector: 'app-myoferts',
  templateUrl: './myoferts.page.html',
  styleUrls: ['./myoferts.page.scss'],
})
export class MyofertsPage implements OnInit {

  iWill: any;
  offers: OfferEnterprise[] = [];

  imagen = "https://allsites.es/tucanapp/public/logos/";

  constructor(public restService: RestService) { }

  ionViewWillEnter(){
  }
  
  ngOnInit() {
    this.cargarIr();
  }

  cargarIr(){
    this.restService.getOfertasAsociadas(this.restService.token.success.token, this.restService.token.success.id)
    .then(data=>{
      this.offers = data.Ir;
      console.log(this.offers);
      // this.offers.push(data.Ir.Oferta);

      
      // console.log('cargarIr (data): ', data);
      // this.iWill=data.Ir;
      // for(let i = 0; i<this.iWill.length; i++){
      //   // console.log(this.iWill[i].offer_id);
      //   // this.cargarOferta(this.iWill[i].offer_id);
      // }
    })
  }

  // cargarOferta(idOferta){
  //   console.log(idOferta);
  //   this.restService.getOffer(this.restService.token.success.token, idOferta)
  //   .then(data=>{
  //     console.log(data.Oferta.enterprise.name);
  //     this.offers.push(data.Oferta);
  //   })
  // }
}
