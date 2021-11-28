
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { progresos } from '../mostrar-progresos/mostrar-progresos-datasource';

@Injectable({
  providedIn: 'root'
})
export class progresosService {

  URL = 'http://localhost:3000/progresos';
  constructor(private http : HttpClient)  { }

  getprogresos(): Observable<progresos[]>{
    return this.http.get<progresos[]>(this.URL);
  }

  getIdprogresos(id:string): Observable<progresos[]>{
    return this.http.get<progresos[]>(this.URL+'/'+id);
  }

  postprogresos(progresos:progresos)
  {
    return this.http.post(this.URL, progresos).subscribe(
      res => console.log(res)
    )
  }

  deleteprogresos(id:string){
    this.http.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  putprogresos(id:string, progresos:progresos){
    return this.http.put(this.URL+'/'+id, progresos).subscribe(
      res => console.log(res)
    )
  }
}
