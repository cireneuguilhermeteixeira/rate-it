import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentVars } from '../environment';


@Injectable()
export class AuthProvider {
  constructor(public http: HttpClient) {
  }

  public register(userData) {
    const url = `${environmentVars.apiUrl}usuarios/novo`
    userData.is_active= false;
    console.log(userData);
    return this.http.post(url,userData)
      .toPromise()
      .then((data: any) => {   
        return data;
      })
    
  }

  
  public login (userData){
    const url = `${environmentVars.apiUrl}usuarios`

    return this.http.get(url)
    .toPromise()
    .then((users: any) => {

      
        for(let i=0; i<users.length; i++){  
          if(users[i].email == userData.email && users[i].password == userData.password){
              console.log('this.users[i]',users[i]);
              return users[i];
          }
        }
        
        return null;
    })

  }

}
