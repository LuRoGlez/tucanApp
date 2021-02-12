import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  vip = false;
  novip = true;
  registrado = false;

  constructor(public restService: RestService) {
    console.log(this.restService.token.success.vip);
    this.registrado = this.restService.token.success.vip;

  }

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
    this.registrado=true;
    this.vip=false;
    
  }

}
