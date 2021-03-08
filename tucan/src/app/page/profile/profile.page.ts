import { Component, OnInit, Injectable } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Geolocalizacion } from '../../models/geoloc.model';

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

  imagen = "https://allsites.es/tucanapp/public/logos/";

  nombreEmpresa = new FormControl('');
  direccionEmpresa = new FormControl('');
  provinciaEmpresa = new FormControl('');
  localidadEmpresa = new FormControl('');
  tipoEmpresa = new FormControl('');
  subTipoEmpresa = new FormControl('');
  imagenEmpresa = new FormControl('');
  latitudEmpresa = "Latitud";
  longitudEmpresa = "Longitud";
  
  token: any;

  subtipos = ['Restaurante Chino', 'Restaurante Mexicano', 'Restaurante asiatico', 'Restaurante Italiano', 'Hamburguesas',
  'Bocadillos', 'Pizza', 'Cocina Modeerna', 'Cocina tradicional', 'Kebab', 'Tapería', 'Chiringuito']

  empresa: any;  
  empresas : any;

  ionViewWillEnter(){
    this.token = this.restService.token.success;
    if(this.token.vip){
      this.vip=false;
      this.novip=false;
      this.registrado=true;
      this.getEmpresa();
    }
  }

  constructor(public restService: RestService, 
              public router: Router,
              private http: HttpClient) { }

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
    let imagenEmpresaBuena = this.imagenEmpresa.value.split('\\');
    imagenEmpresaBuena = imagenEmpresaBuena[imagenEmpresaBuena.length-1]
    
    this.restService.createEnterprise(this.token.token ,this.nombreEmpresa.value, this.direccionEmpresa.value, this.provinciaEmpresa.value, 
      this.localidadEmpresa.value, this.tipoEmpresa.value, this.subTipoEmpresa.value, imagenEmpresaBuena, this.token.id)
      .then(data=>{
        this.empresa = data
    })
    this.actualizarVip();
    this.router.navigate(['/profile'])
  }

  actualizarVip(){
    console.log(this.token.token);
    this.restService.actualizarVip(this.token.token, this.token.id).then(data=>{
    })
  }

  getEmpresa(){
    this.restService.getEnterprises(this.token.token).then(data=>{
      this.empresas = data.Empresas
      for(let i = 0; i < this.empresas.length ; i++){
          if(this.token.id == this.empresas[i].own){
            this.empresa = this.empresas[i]; 
          }
        } 
    })
  }

  crearOferta(){
    this.router.navigate(['/createoffer']);
  }

  ofertasPublicadas(){
    this.router.navigate(['/published']);
  }

  async addrSearch(value: string) {
    return await new Promise<any>(resolve => {
      // Hacemos la llamada a una API que nos devuelve los datos de geolocalización de una dirección
      this.http.get<Geolocalizacion>(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${this.direccionEmpresa.value}, ${value}`)
      .subscribe(data => {
        if (data[0] === undefined) {
          // Si no hay resultados lo indicamos en el HTML
          document.getElementById('results').innerHTML = "Lo siento no existen resultados";
        }
        else {
          document.getElementById('results').innerHTML = "";
          this.latitudEmpresa = data[0].lat.toString();
          this.longitudEmpresa = data[0].lon.toString();
          resolve(data);
        }
      }, err => {
        console.log(err);
      });
    });
  }

}
