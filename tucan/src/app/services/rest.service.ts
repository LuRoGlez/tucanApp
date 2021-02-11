import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  apiUrl = 'http://tucanapp.allsites.es/public';
  token: any;

  constructor(private http: HttpClient) { }

  login() {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/api/login',
      {
        email: 'alvaro@gmail.com',
        password: 'moli'
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

  async getOffersRestaurant() {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/OfertaRestaurante')
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async getOffersBar() {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/OfertaBar')
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }





}
