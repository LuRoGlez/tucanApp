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

  // chooseAddr(lat1, lng1)
  // {
  //   console.log('hola');
  //   this.latitudEmpresa = lat1.toFixed(8);
  //   this.longitudEmpresa = lng1.toFixed(8);
  // }

  async addrSearch(value: string) {
    return await new Promise<any>(resolve => {
      // this.http.get<Geolocalizacion>('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=avenida%20maría%20auxiliadora%207,%20cádiz')
      // console.log(this.direccionEmpresa.value);
      this.http.get<Geolocalizacion>(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${this.direccionEmpresa.value}, ${value}`)
      .subscribe(data => {
        if (data[0] === undefined) {
          // console.log('error');
          document.getElementById('results').innerHTML = "Lo siento no existen resultados";
        }
        else {
          // console.log(data[0]);
          document.getElementById('results').innerHTML = "";
          this.latitudEmpresa = data[0].lat.toString();
          this.longitudEmpresa = data[0].lon.toString();
          resolve(data);
        }
      }, err => {
        console.log(err);
      });
    });

    // const inp = this.direccionEmpresa;
    // const xmlhttp = new XMLHttpRequest();
    // const url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + inp.value;
    // xmlhttp.onreadystatechange = function()
    // {
    //   if (this.readyState == 4 && this.status == 200)
    //   {
    //     const myArr = JSON.parse(this.responseText);
    //     //  this.myFunction(myArr);


    //     let out = "<br />";
      
    //     if(myArr.length > 0)
    //     {
          
    //       for(let i = 0; i < myArr.length; i++)
    //       {
    //         out += "<div onclick='chooseAddr(" + myArr[i].lat + ", " + myArr[i].lon + ");return false;'>" + myArr[i].display_name + "</div>";

    //       //   out += '<ion-button class="address" (click)="chooseAddr(' + myArr[i].lat + ', ' + myArr[i].lon + ')">' + myArr[i].display_name + '</ion-button>';
    //       //   console.log(out);
    //       }
    //       document.getElementById('results').innerHTML = out;
    //     }
    //     else
    //     {
    //       document.getElementById('results').innerHTML = "Sorry, no results...";
    //     }
    //   }
    // };
    // xmlhttp.open("GET", url, true);
    // xmlhttp.send();
  }

}
