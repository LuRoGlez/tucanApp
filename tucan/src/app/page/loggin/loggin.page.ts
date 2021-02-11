import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {

  registrado=true;
  noRegistrado=false;

  constructor() { }

  ngOnInit() {
  }

  registrarse(){
    this.registrado=false;
    this.noRegistrado=true;

  }
  crearCuenta(){
    this.registrado=true;
    this.noRegistrado=false;
  }
}
