import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  kms = 1;

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
}
