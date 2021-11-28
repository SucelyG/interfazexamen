import { Router } from '@angular/router';
import { rutinasService } from '../services/rutinas.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { rutinas } from '../mostrar-tabla-rutinas/mostrar-tabla-rutinas-datasource';

@Component({
  selector: 'app-formulario-agregar-rutinas',
  templateUrl: './formulario-agregar-rutinas.component.html',
  styleUrls: ['./formulario-agregar-rutinas.component.css']
})
export class FormularioAgregarRutinasComponent {
  form = this.fb.group({
    id: '',
    rutinas: [null, Validators.required],
    lista_rutina: [null, Validators.required]

  });
  constructor(private fb: FormBuilder, private rutinasService:rutinasService, private router:Router) {}

  onAgregar(){
    console.log(this.form)

    const rutinas:rutinas ={
      id:this.form.value.id,
      rutinas:this.form.value.rutinas,
      lista_rutina:this.form.value.lista_rutina
    }
    console.log(rutinas);

    this.rutinasService.postrutinas(rutinas);
    this.router.navigate(['/rutinas']);
    setTimeout(location.reload.bind(location), 500);

  }
}
