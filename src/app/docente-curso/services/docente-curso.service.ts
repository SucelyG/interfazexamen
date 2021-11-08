
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocenteCurso } from '../mostrar-docente-curso/mostrar-docente-curso-datasource';

@Injectable({
  providedIn: 'root'
})
export class DocenteCursoService {

  /*URL = 'http://localhost:3000/docente-curso';*/
  URL = 'https://api-rest-colegio.herokuapp.com/docente-curso';
  constructor(private http : HttpClient)  { }

  getDocenteCursos(): Observable<DocenteCurso[]>{
    return this.http.get<DocenteCurso[]>(this.URL);
  }

  getIdDocenteCurso(id:string): Observable<DocenteCurso[]>{
    return this.http.get<DocenteCurso[]>(this.URL+'/'+id);
  }

  postDocenteCursos(docenteCurso:DocenteCurso)
  {
    return this.http.post(this.URL, docenteCurso).subscribe(
      res => console.log(res)
    )
  }

  deleteDocenteCursos(id:string){
    this.http.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  putDocenteCursos(id:string, docenteCurso:DocenteCurso){
    return this.http.put(this.URL+'/'+id, docenteCurso).subscribe(
      res => console.log(res)
    )
  }
}
