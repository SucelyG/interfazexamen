import { cliente } from '../mostrar-clientes/mostrar-clientes-datasource';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class clienteService {

  URL = 'http://localhost:3000/cliente';

  constructor(private httClient : HttpClient)  { }

  getcliente(): Observable<cliente[]>{
    return this.httClient.get<cliente[]>(this.URL);
  }

  getIdcliente(id:string): Observable<cliente[]>{
    return this.httClient.get<cliente[]>(this.URL+'/'+id);
  }

  postcliente(cliente:cliente)
  {
    return this.httClient.post(this.URL,cliente).subscribe(
      res => console.log(res)
    )
  }

  deletecliente(id:string){
    this.httClient.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  putcliente(id:string, cliente:cliente){
    return this.httClient.put(this.URL+'/'+id, cliente).subscribe(
      res => console.log(res)
    )
  }

}
