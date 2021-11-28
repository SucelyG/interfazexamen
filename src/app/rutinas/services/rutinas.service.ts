import { rutinas } from '../mostrar-tabla-rutinas/mostrar-tabla-rutinas-datasource';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class rutinasService {

  URL = 'http://localhost:3000/rutinas';

  constructor(private http : HttpClient)  { }

  getrutinas(): Observable<rutinas[]>{
    return this.http.get<rutinas[]>(this.URL);
  }

  getIdrutinas(id:string): Observable<rutinas[]>{
    return this.http.get<rutinas[]>(this.URL+'/'+id);
  }

  postrutinas(rutinas:rutinas)
  {
    return this.http.post(this.URL,rutinas).subscribe(
      res => console.log(res)
    )
  }

  putrutinas(id:string, rutinas:rutinas){
    return this.http.put(this.URL+'/'+id, rutinas).subscribe(
      res => console.log(res)
    )
  }

  deleterutinas(id:string){
    this.http.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

}
