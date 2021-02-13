import { Component, OnInit, Injectable } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

@Injectable({
  providedIn: 'root'
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
  
  empresas : any;



  constructor(public restService: RestService, public router: Router) {
    if(this.restService.token.success.vip){
      this.vip=false;
      this.novip=false;
      this.registrado=true;
      this.getEmpresa();
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
    this.actualizarVip();
    this.router.navigate(['/loggin'])
  }

  actualizarVip(){
    console.log(this.restService.token.success.token);
    this.restService.actualizarVip(this.restService.token.success.token, this.restService.token.success.id).then(data=>{
      console.log(data);
    })
  }

  getEmpresa(){
    this.restService.getEnterprises(this.restService.token.success.token).then(data=>{
      this.empresas = data.Empresas
      for(let i = 0; i < this.empresas.length ; i++){
          if(this.restService.token.success.id == this.empresas[i].own){
            this.empresa = this.empresas[i]; 
          }
        }
        console.log(this.empresa)
    })
  }

  crearOferta(){
    this.router.navigate(['/createoffer']);
  }

  ofertasPublicadas(){
    this.router.navigate(['/published']);
  }

}
