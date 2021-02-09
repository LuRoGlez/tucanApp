import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'https://allsites.es/api/public/api';
  token: any;

  constructor(private http: HttpClient) { }

  login() {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/login',
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


}
