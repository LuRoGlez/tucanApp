

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';


// import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {
  @Input() nombreEmpresa: any;
  @Input() latitudEmpresa: any;
  @Input() longitudEmpresa: any;
  @Input() TituloOferta: any;
  @Input() DescripcionOferta: any;
  @Input() ImagenEmpresa: any;
  @Input() ValoracionOferta: any;
  @Input() idOferta: any;
  @Input() musicaDirecto: any;
  @Input() derpoteDirecto: any;
  
  crearEliminar = 0;

  token: any;
  offer: any;
  enterprise: any;
  iWIll: any;

  imagen = "https://allsites.es/tucanapp/public/logos/";
  imagenStar = "/assets/imgs/stars";
  
  constructor(public modalCtrl: ModalController,
              public restService: RestService,
              public router:Router ) { }

  ionViewWillEnter(){
    this.mostrarWillGo()
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
  
  irMapa(){
    this.restService.empresaActualLatitud = this.latitudEmpresa;
    this.restService.empresaActualLongitud = this.longitudEmpresa;
    this.restService.empresaActualNombre = this.nombreEmpresa;
    this.router.navigate(['/mapa']);
    this.dismiss();
  }
    
  createWillGo(){
    this.restService.createWillGo(this.restService.token.success.token,this.idOferta, this.restService.token.success.id);
  }

  eliminarWillGo(){
    this.restService.eliminarWIllGo(this.restService.token.success.token,this.idOferta, this.restService.token.success.id)
  }

  mostrarWillGo(){

    this.restService.getInscritos(this.restService.token.success.token, this.idOferta)
      .then(data =>{
        this.iWIll = data.Ir
        for(let i = 0; i<this.iWIll.length; i++){
          if(this.iWIll[i].user_id == this.restService.token.success.id){
            this.crearEliminar = 1
          }
        }
        
      });
  }
}
