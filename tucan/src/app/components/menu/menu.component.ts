import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  kms: number;

  constructor(public router: Router,
              public restService: RestService) { }

  ngOnInit() {
    this.kms = this.restService.kms;
  }

  irPerfil(){
    this.router.navigate(['/profile']);
  }

  irHome(){
    this.router.navigate(['/tab-principal']);
    
  }

  irFiltros(){
    this.router.navigate(['/filters'])
  }

  cambiarDistancia(event) {
    this.restService.kms = event.detail.value;
    this.kms = event.detail.value;
  }

}
