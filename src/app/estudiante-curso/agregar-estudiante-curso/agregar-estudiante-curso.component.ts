import { EstudianteCursoService } from './../services/estudiante-curso.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EstudianteCurso } from '../mostrar-estudiante-curso/mostrar-estudiante-curso-datasource';

@Component({
  selector: 'app-agregar-estudiante-curso',
  templateUrl: './agregar-estudiante-curso.component.html',
  styleUrls: ['./agregar-estudiante-curso.component.css']
})
export class AgregarEstudianteCursoComponent {
  addressForm = this.fb.group({
    id: [''],
    id_estudiante: ['', Validators.required],
    estudiante: [''],
    id_curso: ['', Validators.required],
    nombre: [''],
    status: ['', Validators.required],
    fecha_inicio: ['', Validators.required],
    fecha_fin: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private estudianteCursoService: EstudianteCursoService, private router:Router) {}

  onAgregar(){
    /*console.log(this.form)*/

    const estudiantecurso:EstudianteCurso ={
      id:this.addressForm.value.id,
      id_estudiante:this.addressForm.value.id_estudiante,
      estudiante:this.addressForm.value.estudiante,
      id_curso:this.addressForm.value.id_curso,
      nombre:this.addressForm.value.nombre,
      status:this.addressForm.value.status,
      fecha_inicio:this.addressForm.value.fecha_inicio,
      fecha_fin:this.addressForm.value.fecha_fin,
    }
    /*console.log(persona);*/

    this.estudianteCursoService.postEstudianteCursos(estudiantecurso);
    this.router.navigate(['/estudiante-curso']);
    setTimeout(location.reload.bind(location), 500);

  }
}
