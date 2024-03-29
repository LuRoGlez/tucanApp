import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  apiUrl = 'http://tucanapp.allsites.es/public';
  token: any;
  vip: any;
  empresaActualLatitud: any;
  empresaActualLongitud: any;
  empresaActualNombre: any;
  offersRestfiltered: Offer[] = [];
  offersBarfiltered: Offer[] = [];
  offersDiscofiltered: Offer[] = [];
  kms = 1;
  
  distanciaModificada = 1;

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
          // console.log(err);
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
          // console.log(err);
        });
    });
  }

  async getEnterprises(tok: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/enterprises', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        // console.log(err);
      });
    });
  }

  async getOffers(tok: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/offers', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        // console.log(err);
      });
    });
  }

  async getEnterprise(tok: any, id) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/enterprises/' + id, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        // console.log(err);
      });
    });
  }

  async getOffer(tok: any, id) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/offers/' + id, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        // console.log(err);
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
        // console.log(err);
      });
    });
  }

  async getOffersRestaurant(tok: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/OfertaRestaurante', 
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        // console.log(err);
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
        //console.log(err);
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
        //console.log(err);
      });
    });
  }
  
  async createEnterprise(tok: any, nombreEmpresa, direccionEmpresa, 
                provinciaEmpresa, localidadEmpresa, tipoEmpresa, 
                subTipoEmpresa, imagenEmpresa, dueño,
                latitudEmpresa, longitudEmpresa) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/enterprises',
      {
        name: nombreEmpresa,
        address: direccionEmpresa,
        type: tipoEmpresa,
        logo: imagenEmpresa,
        own: dueño,
        city: localidadEmpresa,
        state: provinciaEmpresa,
        subtype: subTipoEmpresa,
        latitud: latitudEmpresa,
        longitud: longitudEmpresa
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          //console.log(err);
        });
    });
  }

  async createOffer(tok: any, nombreOferta, descripdionOferta, fechaInicio, horaInicio, horaFin, musicaDirecto, idEmpresa, deporteDirecto) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/offers',
      {
        name: nombreOferta,
        description: descripdionOferta,
        start_date: fechaInicio,
        start_time: horaInicio,
        finish_time: horaFin,
        assessment: 0,
        enterprise_id: idEmpresa,
        music_direct: musicaDirecto,
        sport_direct: deporteDirecto
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          //console.log(err);
        });
    });
  }


  async createWillGo(tok: any, offer_id, user_id) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/iWillGoes',
      {
        offer_id: offer_id,
        user_id: user_id,
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          //console.log(err);
        });
    });
  }

  async getInscritos(tok: any, id: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/inscritos/'+id, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        //console.log(err);
      });
    });
  }

  async eliminarWIllGo(tok: any, idOffer: any, idUser: any) {
    return await new Promise<any>(resolve => {
      this.http.delete(this.apiUrl + '/eliminar/'+idOffer+'.'+idUser, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        //console.log(err);
      });
    });
  }

  async getWillGoes(tok: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/iWillGoes/', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        //console.log(err);
      });
    });
  }
  
  async valorar(tok: any, idOffer: any, idUser: any, value: any) {
    return await new Promise<any>(resolve => {
      this.http.patch(this.apiUrl + '/valorar/'+idOffer+'.'+idUser, 
      {
        value: value
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        //console.log(err);
      });
    });
  }

  async estrellasOferta(tok: any, idOffer: any, value: any) {
    return await new Promise<any>(resolve => {
      this.http.patch(this.apiUrl + '/offers/'+idOffer, 
      {
        assessment: value
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        //console.log(err);
      });
    });
  }

  async getOfertasAsociadas(tok: any, idUser: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/OfertasPersona/'+idUser, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
      .subscribe(data => {
        // console.log('Servicio (data): ', data);
        resolve(data);
      }, err => {
        //console.log(err);
      });
    });
  }

  async formulario(tok: any, chino?, mexicano?, asiatico?, italiano?, burger?, bocatas?, pizza?
    , moderna?, tradicional?, kebab?, tapas?, chiringuito?, sport_direct?, music_direct?) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/filtros',
      {
        Chino: chino,
        Mexicano: mexicano,
        Asiatico: asiatico,
        Italiano: italiano,
        Burger: burger,
        Bocatas: bocatas,
        Pizza: pizza,
        Moderna: moderna,
        Tradicional: tradicional,
        Kebab: kebab,
        Tapas: tapas,
        Chiringuito: chiringuito,
        sport_direct: sport_direct,
        music_direct: music_direct
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          //console.log(err);
        });
    });
  }



}
