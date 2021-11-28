import { entrenos } from './../mostrar-entrenos/mostrar-entrenos-datasource';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class entrenosService {

  URL = 'http://localhost:3000/entrenos';

  constructor(private http : HttpClient)  { }

  getentrenos(): Observable<entrenos[]>{
    return this.http.get<entrenos[]>(this.URL);
  }

  getIdentrenos(id:string): Observable<entrenos[]>{
    return this.http.get<entrenos[]>(this.URL+'/'+id);
  }

  postentrenos(entrenos:entrenos)
  {
    return this.http.post(this.URL, entrenos).subscribe(
      res => console.log(res)
    )
  }

  deleteentrenos(id:string){
    this.http.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  putentrenos(id:string, entrenos:entrenos){
    return this.http.put(this.URL+'/'+id, entrenos).subscribe(
      res => console.log(res)
    )
  }
}
