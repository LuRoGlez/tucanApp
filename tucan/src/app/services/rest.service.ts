import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'https://allsites.es/api/public';
  token: any;

  constructor(private http: HttpClient) { }

  login() {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/api/login',
      {
        email: 'raul@raul.com',
        password: '123456'
      })
        .subscribe(data => {
          this.token = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  getEnterprises(tok: any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/enterprises', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getOneEnterprise(tok: any, id: any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/enterprises/'+id, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteEnterprise(tok: any, id: any) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/enterprises/'+id, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getOffers(tok: any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/offers', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }



  
  getOneOffer(tok: any, id: any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/offers/'+id, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteOffer(tok: any, id: any) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/offers/'+id, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
