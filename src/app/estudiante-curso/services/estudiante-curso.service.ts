import { EstudianteCurso } from './../mostrar-estudiante-curso/mostrar-estudiante-curso-datasource';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteCursoService {

  /*URL = 'http://localhost:3000/estudiante-curso';*/
  URL = 'https://api-rest-colegio.herokuapp.com/estudiante-curso';
  constructor(private http : HttpClient)  { }

  getEstudianteCursos(): Observable<EstudianteCurso[]>{
    return this.http.get<EstudianteCurso[]>(this.URL);
  }

  getIdEstudianteCurso(id:string): Observable<EstudianteCurso[]>{
    return this.http.get<EstudianteCurso[]>(this.URL+'/'+id);
  }

  postEstudianteCursos(estudianteCurso:EstudianteCurso)
  {
    return this.http.post(this.URL, estudianteCurso).subscribe(
      res => console.log(res)
    )
  }

  deleteEstudianteCursos(id:string){
    this.http.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  putEstudianteCursos(id:string, estudianteCurso:EstudianteCurso){
    return this.http.put(this.URL+'/'+id, estudianteCurso).subscribe(
      res => console.log(res)
    )
  }
}
