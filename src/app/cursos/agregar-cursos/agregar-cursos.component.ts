import { CursosService } from './../services/cursos.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Curso } from '../mostar-cursos/mostar-cursos-datasource';

@Component({
  selector: 'app-agregar-cursos',
  templateUrl: './agregar-cursos.component.html',
  styleUrls: ['./agregar-cursos.component.css']
})
export class AgregarCursosComponent {
  addressForm = this.fb.group({
    id: [''],
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private cursosService: CursosService, private router:Router) {}

  onAgregar(){
    /*console.log(this.form)*/

    const curso:Curso ={
      id:this.addressForm.value.id,
      nombre:this.addressForm.value.nombre,
      descripcion:this.addressForm.value.descripcion,
    }
    /*console.log(persona);*/

    this.cursosService.postCursos(curso);
    this.router.navigate(['/cursos']);
    setTimeout(location.reload.bind(location), 500);

  }
}
