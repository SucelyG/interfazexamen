import { Router } from '@angular/router';
import { entrenadorService } from '../services/entrenador.service';
import { entrenador } from '../mostrar-entrenador/mostrar-entrenador-datasource';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-entrenador',
  templateUrl: './agregar-entrenador.component.html',
  styleUrls: ['./agregar-entrenador.component.css']
})
export class AgregarentrenadorComponent {
  form = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    status: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private entrenadorService:entrenadorService, private router:Router) {}

  onAgregar(){
    console.log(this.form)

    const entrenador:entrenador ={
      id:this.form.value.id,
      id_persona:this.form.value.id_persona,
      status:this.form.value.status
    }
    console.log(entrenador);

    this.entrenadorService.postentrenador(entrenador);
    this.router.navigate(['/entrenador']);
    setTimeout(location.reload.bind(location), 500);

  }
}
