import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private URL = "http://localhost:3000/";
  constructor(private http : HttpClient) { }

  login(user: Usuario ){
    return this.http.post<any>(this.URL + 'login',user);
  }

  logout(){
    localStorage.removeItem('token');
  }

  logedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}

export interface Usuario {
  id:number;
  userName:string;
  password:string;
}
