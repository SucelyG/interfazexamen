import { PersonaService } from './../services/persona.service';
import { Persona } from './../mi-tabla/mi-tabla-datasource';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-formulario',
  templateUrl: './mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent {
  form = this.fb.group({
    id: [''],
    nombre: ['', Validators.required],
    Apellido: ['', Validators.required],
   edad: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private personaService: PersonaService, private router:Router) {

  }

  onAgregar(){
    /*console.log(this.form)*/

    const persona:Persona ={
      id:this.form.value.id,
      nombre:this.form.value.nombre,
      Apellido:this.form.value.Apellido,
      edad:this.form.value.edad,
    }
    /*console.log(persona);*/

    this.personaService.postPersonas(persona);
    this.router.navigate(['/personas']);
    setTimeout(location.reload.bind(location), 500);

  }
}
