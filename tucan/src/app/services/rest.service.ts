import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  apiUrl = 'http://tucanapp.allsites.es/public';
  token: any;
  vip: any;

  constructor(private http: HttpClient) { }

  async login(email, password) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/api/login',
      {
        email: email,
        password: password
      })
        .subscribe(data => {
          this.token = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async register(name, email, password, c_password) {
    return await new Promise(resolve => {
      this.http.post(this.apiUrl + '/api/register',
      {
        name: name,
        email: email,
        password: password,
        c_password: c_password
      })
        .subscribe(data => {
          this.token = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  // getOffers(tok: any) {
  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl + '/offers', {
  //       headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
  //     })
  //     .subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }

  async getOffersRestaurant(tok: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/OfertaRestaurante', 
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async actualizarVip(tok: any, id: any) {
    return await new Promise<any>(resolve => {
      this.http.patch(this.apiUrl + '/users/'+id, 
      {
        vip: 1
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async getOffersDicotheque(tok: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/OfertaDiscoteca', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async getOffersBar(tok: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/OfertaBar', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async createEnterprise(tok: any, nombreEmpresa, direccionEmpresa, provinciaEmpresa, localidadEmpresa, tipoEmpresa, subTipoEmpresa, imagenEmpresa, dueño) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/enterprises',
      {
        name: nombreEmpresa,
        address: direccionEmpresa,
        type: tipoEmpresa,
        logo: imagenEmpresa,
        own: dueño,
        state: provinciaEmpresa,
        city: localidadEmpresa,
        subtype: subTipoEmpresa
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
        .subscribe(data => {
          this.token = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }





}
