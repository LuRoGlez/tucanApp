import { Component, OnInit } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';
import { RestService } from '../../services/rest.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createoffer',
  templateUrl: './createoffer.page.html',
  styleUrls: ['./createoffer.page.scss'],
})
export class CreateofferPage implements OnInit {

  empresas: any;
  empresa: any;

  nameOferta = new FormControl('');
  fechaInicio = new FormControl('');
  horaInicio = new FormControl('');
  horaFin = new FormControl('');
  descripcionOferta = new FormControl('');
  musicaDirecto = new FormControl('');
  deporteDirecto = new FormControl('');

  musicaDirecto2: any;
  deporteDirecto2: any;
  fechaInicio2: any;
  horaInicio2: any;
  horaFin2: any;

  token: any;

  ionViewWillEnter(){
    this.token = this.restService.token.success;
    console.log(this.token)
    this.getEmpresa()
  }


  
  constructor(public restService: RestService, public profilePage: ProfilePage, public router: Router) {

  }

  ngOnInit() {
  }



  crearOferta(){
    
    this.ajustarMusicaDeporte()
    this.ajustarFechas();

    this.restService.createOffer(this.token.token, this.nameOferta.value, 
      this.descripcionOferta.value, this.fechaInicio2, this.horaInicio2, this.horaFin2, 
      this.musicaDirecto2, this.empresa.id , this.deporteDirecto2)
      .then(data=>{
        
      })

    this.router.navigate(['/profile'])
  }



  ajustarMusicaDeporte(){
    if(this.musicaDirecto.value == ""){
      this.musicaDirecto2 = false
    }
    else{
      this.musicaDirecto2 = this.musicaDirecto.value
    }

    if(this.deporteDirecto.value == ""){
      this.deporteDirecto2 = false
    }else{
      this.deporteDirecto2 = this.deporteDirecto.value
    }
  }

  ajustarFechas(){
    this.fechaInicio2 = this.fechaInicio.value.split('T');
    this.fechaInicio2 = this.fechaInicio2[0];

    this.horaInicio2 = this.horaInicio.value.split('T');
    this.horaInicio2 = this.horaInicio2[1].split('.');
    this.horaInicio2 = this.horaInicio2[0];

    this.horaFin2 = this.horaFin.value.split('T');
    this.horaFin2 = this.horaFin2[1].split('.');
    this.horaFin2 = this.horaFin2[0];
  }

  getEmpresa(){
    this.restService.getEnterprises(this.token.token).then(data=>{
      this.empresas = data.Empresas
      for(let i = 0; i < this.empresas.length ; i++){
          if(this.token.id == this.empresas[i].own){
            this.empresa = this.empresas[i]; 
            console.log(this.empresa)
          }
        }
        
    })
  }
}
