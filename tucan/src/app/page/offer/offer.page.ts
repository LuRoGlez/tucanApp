

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';

// import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {
  

  @Input() nombreEmpresa: any;
  @Input() TituloOferta: any;
  @Input() DescripcionOferta: any;
  @Input() ImagenEmpresa: any;
  @Input() ValoracionOferta: any;
  @Input() idOferta: any;
  crearEliminar = 0;



  token: any;
  offer: any;
  enterprise: any;

  constructor(public modalCtrl: ModalController, public restService: RestService ) {
    
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

  /**metodos mapa */

  



  voyAIr(){
    if (this.crearEliminar = 0){
      this.createWillGo
      this.crearEliminar = 1
    }
    else{

      this.crearEliminar = 0
    }
  }

  createWillGo(){
    this.restService.createWillGo(this.restService.token.success.token,this.idOferta, this.restService.token.success.id);
  }




  


}
