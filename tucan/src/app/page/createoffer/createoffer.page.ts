import { Component, OnInit } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';
import { RestService } from '../../services/rest.service';
import { FormControl } from '@angular/forms';

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


  
  constructor(public restService: RestService, public profilePage: ProfilePage) {
    this.getEmpresa()

  }

  ngOnInit() {
  }



  crearOferta(){
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

    console.log(this.horaInicio.value, this.musicaDirecto2, this.deporteDirecto2)
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
}
