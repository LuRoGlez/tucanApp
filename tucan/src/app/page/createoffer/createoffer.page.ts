import { Component, OnInit } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-createoffer',
  templateUrl: './createoffer.page.html',
  styleUrls: ['./createoffer.page.scss'],
})
export class CreateofferPage implements OnInit {

  empresas: any;
  empresa: any;
  
  constructor(public restService: RestService, public profilePage: ProfilePage) {
    this.getEmpresa()
    
  }

  ngOnInit() {
  }


  getEmpresa(){
    this.restService.getEnterprises(this.restService.token.success.token).then(data=>{
      this.empresas = data.Empresas
      for(let i = 0; i < this.empresas.length ; i++){
          if(this.restService.token.success.id == this.empresas[i].own){
            this.empresa = this.empresas[i]; 
          }
        }
        
    })
  }
}
