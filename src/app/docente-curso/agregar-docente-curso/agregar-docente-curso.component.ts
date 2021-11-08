import { Router } from '@angular/router';
import { DocenteCursoService } from './../services/docente-curso.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DocenteCurso } from '../mostrar-docente-curso/mostrar-docente-curso-datasource';

@Component({
  selector: 'app-agregar-docente-curso',
  templateUrl: './agregar-docente-curso.component.html',
  styleUrls: ['./agregar-docente-curso.component.css']
})
export class AgregarDocenteCursoComponent {
  addressForm = this.fb.group({
    id: [''],
    id_docente: ['', Validators.required],
    docente: [''],
    id_curso: ['', Validators.required],
    curso: [''],
    stauts: ['', Validators.required],
    fecha_inicio: ['', Validators.required],
    fecha_fin: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private docenteCursoService: DocenteCursoService, private router:Router) {}

  onAgregar(){
    /*console.log(this.form)*/

    const docenteCurso:DocenteCurso ={
      id:this.addressForm.value.id,
      id_docente:this.addressForm.value.id_docente,
      docente:this.addressForm.value.docente,
      id_curso:this.addressForm.value.id_curso,
      curso:this.addressForm.value.curso,
      stauts:this.addressForm.value.stauts,
      fecha_inicio:this.addressForm.value.fecha_inicio,
      fecha_fin:this.addressForm.value.fecha_fin,
    }
    /*console.log(persona);*/

    this.docenteCursoService.postDocenteCursos(docenteCurso);
    this.router.navigate(['/docente-curso']);
    setTimeout(location.reload.bind(location), 500);

  }
}
