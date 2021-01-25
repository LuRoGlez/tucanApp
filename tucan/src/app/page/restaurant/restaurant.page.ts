import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  SportLive = false;
  LiveMusic = true;
  buscador = true;

  constructor() { }

  ngOnInit() {

  }

}
