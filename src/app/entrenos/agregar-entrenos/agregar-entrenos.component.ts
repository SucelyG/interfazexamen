import { entrenosService } from './../services/entrenos.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { entrenos } from '../mostrar-entrenos/mostrar-entrenos-datasource';

@Component({
  selector: 'app-agregar-entrenos',
  templateUrl: './agregar-entrenos.component.html',
  styleUrls: ['./agregar-entrenos.component.css']
})
export class AgregarentrenosComponent {
  addressForm = this.fb.group({
    id: [''],
    id_entrenador: ['', Validators.required],
    id_rutinas: ['', Validators.required],
    id_persona: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private entrenosService: entrenosService, private router:Router) {}

  onAgregar(){
    /*console.log(this.form)*/

    const entrenos:entrenos ={
      id:this.addressForm.value.id,
      id_entrenador:this.addressForm.value.id_entrenador,
      id_rutinas:this.addressForm.value.id_rutinas,
      id_persona:this.addressForm.value.id_persona
    }
    /*console.log(entrenos);*/

    this.entrenosService.postentrenos(entrenos);
    this.router.navigate(['/entrenos']);
    setTimeout(location.reload.bind(location), 500);

  }
}
