import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  kms = 1;
  filtros:any = {
    chino: false,
    mexicao: false,
    asiatico: false,
    italiano: false,
    burger: false,
    bocatas: false,
    pizza: false,
    moderna: false,
    tradicional: false,
    kebab: false,
    tapas: false,
    chiringuito: false,
    sport_direct: false,
    music_direct: false,
  }


  constructor(private geolocation: Geolocation,
              public restService: RestService) { }

  ngOnInit() { }

  ionViewWillEnter(){
    this.kms = this.restService.kms;
  }

  cambiarDistancia(event) {
    this.restService.kms = event.detail.value;
    this.restService.distanciaModificada=1;
    this.kms = event.detail.value;
  }

  formulario(){
    this.restService.formulario(this.restService.token.success.token, this.filtros.chino, this.filtros.mexicano, 
      this.filtros.asiatico, this.filtros.italiano, this.filtros.burger, this.filtros.bocatas, this.filtros.pizza, 
      this.filtros.moderna, this.filtros.tradicional, this.filtros.kebab, this.filtros.tapas, this.filtros.chiringuito, this.filtros.sport_direct, this.filtros.music_direct)
      .then(data=>{
        console.log(data)
      })
  }
}
