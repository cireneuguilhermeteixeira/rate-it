import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentVars } from '../environment';


@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  public getPopular() {
    const url = `${environmentVars.apiUrl}filmes/populares`

    return this.http.get(url)
      .toPromise()
      .then((data: any) => {
        return data;
      })
    
  }

  public getById(idMovie){
    const url = `${environmentVars.apiUrl}filmes/${idMovie}`

    return this.http.get(url)
      .toPromise()
      .then((data: any) => {
        return data;
      })
  }

  public getPathImage(idMovie){
    const url = `${environmentVars.apiUrl}filmes/${idMovie}/poster`

    return this.http.get(url)
      .toPromise()
      .then((data: any) => {
        return data;
      })
  }
}
