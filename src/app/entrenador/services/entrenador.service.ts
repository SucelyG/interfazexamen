import { entrenador } from '../mostrar-entrenador/mostrar-entrenador-datasource';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class entrenadorService {

  URL = 'http://localhost:3000/entrenador';

  constructor(private http : HttpClient)  { }

  getentrenador(): Observable<entrenador[]>{
    return this.http.get<entrenador[]>(this.URL);
  }

  getIdentrenador(id:string): Observable<entrenador[]>{
    return this.http.get<entrenador[]>(this.URL+'/'+id);
  }

  postentrenador(entrenador:entrenador)
  {
    return this.http.post(this.URL,entrenador).subscribe(
      res => console.log(res)
    )
  }

  putentrenador(id:string, entrenador:entrenador){
    return this.http.put(this.URL+'/'+id, entrenador).subscribe(
      res => console.log(res)
    )
  }

  deleteentrenador(id:string){
    this.http.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

}
