import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { dieta } from '../mostrar-dietas/mostrar-dietas-datasource';

@Injectable({
  providedIn: 'root'
})
export class dietaService {

URL = 'http://localhost:3000/dieta';

  constructor(private http : HttpClient)  { }

  getdieta(): Observable<dieta[]>{
    return this.http.get<dieta[]>(this.URL);
  }

  getIddieta(id:string): Observable<dieta[]>{
    return this.http.get<dieta[]>(this.URL+'/'+id);
  }

  postdieta(dieta:dieta)
  {
    return this.http.post(this.URL, dieta).subscribe(
      res => console.log(res)
    )
  }

  deletedieta(id:string){
    this.http.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  putdieta(id:string, dieta:dieta){
    return this.http.put(this.URL+'/'+id, dieta).subscribe(
      res => console.log(res)
    )
  }

}




