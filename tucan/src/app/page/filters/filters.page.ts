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
  chino = new FormControl('');
  mexicano = new FormControl('');
  asiatico = new FormControl('');
  italiano = new FormControl('');
  burger = new FormControl('');
  bocatas = new FormControl('');
  pizza = new FormControl('');
  moderna = new FormControl('');
  tradicional = new FormControl('');
  kebab = new FormControl('');
  tapas = new FormControl('');
  chiringuito = new FormControl('');
  sport_direct = new FormControl('');
  music_direct = new FormControl('');




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
    this.restService.formulario(this.restService.token.success.token, this.chino.value, this.mexicano.value, 
      this.asiatico.value, this.italiano.value, this.burger.value, this.bocatas.value, this.pizza.value, 
      this.moderna.value, this.tradicional.value, this.kebab.value, this.tapas.value, this.chino.value, this.sport_direct.value, this.music_direct.value)
      .then(data=>{
        console.log(data)
      })
  }
}
