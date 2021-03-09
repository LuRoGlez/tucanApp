import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {

  kms: number;

  constructor(public restService: RestService) { }

  ngOnInit() {
    this.kms = this.restService.kms;
  }

  cambiarDistancia(event) {
    this.restService.kms = event.detail.value;
    this.kms = event.detail.value;
  }

}
