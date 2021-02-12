import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {

  registrado=true;
  noRegistrado=false;
  password = new FormControl('');
  email = new FormControl('');
  c_password = new FormControl('');
  name = new FormControl('');

  token: any;


  constructor(public restService: RestService, public router: Router) { }

  ngOnInit() {
  }

  registrarse(){
    this.registrado=false;
    this.noRegistrado=true;

  }
  crearCuenta(){
    this.restService.register(this.name.value, this.email.value, this.password.value, this.c_password.value).then(data=>{
      this.token = data
      if (this.restService.token.success.token != null){
        this.router.navigate(['/tab-principal']);
      }
    })
  }

  login(){
    this.restService.login(this.email.value, this.password.value).then(data=>{
      this.token = data;
      if (this.restService.token.success.token != null){
        this.router.navigate(['/tab-principal']);
      }
    })
    
  }

  
  

}
