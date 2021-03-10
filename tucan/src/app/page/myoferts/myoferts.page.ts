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
  Ir:any;
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


  valorar(idOferta, value){
    this.restService.valorar(this.restService.token.success.token, idOferta, this.restService.token.success.id, value)
    .then(data=>{
      // console.log(data)
      this.actualizarValoracion(idOferta);
    })
  }

  actualizarValoracion(idOferta){
    let contador = 0;
    let value = 0;
    this.restService.getInscritos(this.restService.token.success.token, idOferta)
    .then(data=>{
      this.Ir = data.Ir;
      for(let i = 0; i<this.Ir.length; i++){
        if(this.Ir[i].value != null){
          contador = contador + 1;
          value = value + this.Ir[i].value
        }
      }
      value = value / contador;
      this.restService.estrellasOferta(this.restService.token.success.token, idOferta, value)
      .then(data=>{
        // console.log(data)
      })
    })
  }
}
