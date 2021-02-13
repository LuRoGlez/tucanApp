import { Component, OnInit } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-published',
  templateUrl: './published.page.html',
  styleUrls: ['./published.page.scss'],
})
export class PublishedPage implements OnInit {

  empresas: any;
  empresa: any;

  constructor(public restService: RestService,public profilePage: ProfilePage) { 
    this.getEmpresa()
  }

  ngOnInit() {
  }


  getEmpresa(){
    this.restService.getEnterprises(this.restService.token.success.token).then(data=>{
      this.empresas = data.Empresas
      for(let i = 0; i < this.empresas.length ; i++){
          if(this.restService.token.success.id == this.empresas[i].own){
            this.restService.getEnterprise(this.restService.token.success.token, this.empresas[i].id).then(data=>{
              this.empresa = data.Empresa;
            }) 
          }
        }
    })
  }


}
