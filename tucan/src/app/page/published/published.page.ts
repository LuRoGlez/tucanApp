import { Component, OnInit } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-published',
  templateUrl: './published.page.html',
  styleUrls: ['./published.page.scss'],
})
export class PublishedPage implements OnInit {

  empresas: any;
  empresa: any;
  ofertas: any[];
  iWIll: any;
  estrellas: any;

  constructor(public restService: RestService,public profilePage: ProfilePage) { 
    this.getEmpresa()
    this.getOffers()
  }

  ngOnInit() {
  }

  getEmpresa(){
    this.restService.getEnterprises(this.restService.token.success.token).then(data=>{
      this.empresas = data.Empresas
      for(let i = 0; i < this.empresas.length ; i++){
          if(this.restService.token.success.id == this.empresas[i].own){
            this.empresa = this.empresas[i]; 
          }
        }
        
    })
  }

  getOffers(){
    this.restService.getOffers(this.restService.token.success.token).then(data=>{
      this.ofertas = [];
      for(let i = 0; i<data.Ofertas.length; i++){
        if(data.Ofertas[i].enterprise_id == this.empresa.id){
          this.ofertas.push(data.Ofertas[i]);
          if(data.Ofertas[i].assesment <1.5){
            console.log(data.Ofertas[1].assesment)
          }
          else if(data.Ofertas[i].assesment >= 1.5 && data.Ofertas[1].assesment < 2.5){
            console.log(data.Ofertas[1].assesment)
          }
          else if(data.Ofertas[i].assesment >= 2.5 && data.Ofertas[1].assesment < 3.5){
            console.log(data.Ofertas[1].assesment)
          }
          else if(data.Ofertas[i].assesment >= 3.5 && data.Ofertas[1].assesment < 4.5){
            console.log(data.Ofertas[1].assesment)
          }
          else if(data.Ofertas[i].assesment >= 4.5){
            console.log(data.Ofertas[1].assesment)
          }
        }
      }
      
    })
  }

}
