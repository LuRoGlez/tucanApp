import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  vip = false;
  novip = true;
  registrado = false;


  nombreEmpresa = new FormControl('');
  direccionEmpresa = new FormControl('');
  provinciaEmpresa = new FormControl('');
  localidadEmpresa = new FormControl('');
  tipoEmpresa = new FormControl('');
  subTipoEmpresa = new FormControl('');
  imagenEmpresa = new FormControl('');
  dueño:any;

  empresa: any;
  




  constructor(public restService: RestService) {
    if(this.restService.token.success.vip){
      this.vip=false;
      this.novip=false;
      this.registrado=true;


    }
    

  }

  ngOnInit() {
    
  }
  
  

  cambiarVip(){
    
    if(this.vip==true){
     this.vip=false;
     this.novip=true;
    }else{
      this.vip=true;
      this.novip=false;
    }
  }

  registrar(){
    
    this.dueño = this.restService.token.success.id;
    let imagenEmpresaBuena = this.imagenEmpresa.value.split('\\');
    imagenEmpresaBuena = imagenEmpresaBuena[imagenEmpresaBuena.length-1]
    
    this.restService.createEnterprise(this.restService.token.success.token ,this.nombreEmpresa.value, this.direccionEmpresa.value, this.provinciaEmpresa.value, 
      this.localidadEmpresa.value, this.tipoEmpresa.value, this.subTipoEmpresa.value, imagenEmpresaBuena, this.dueño)
      .then(data=>{
        this.empresa = data
    })
    // this.registrado=true;
    // this.vip=false;
  }

}
