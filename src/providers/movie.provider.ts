import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentVars } from '../environment';


@Injectable()
export class MovieProvider{

  constructor(public http: HttpClient) {
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
        return JSON.parse(data.body);
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

  public avaliar (avaliacao){
    const url = `${environmentVars.apiUrl}filmes/${avaliacao.movie_id}/avaliar`;
    return this.http.post(url,avaliacao)
    .toPromise()
    .then((data: any) => {
      return data;
    })
  }
}
