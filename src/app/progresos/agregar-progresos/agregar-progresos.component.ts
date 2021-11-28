import { Router } from '@angular/router';
import { progresosService } from '../services/progresos.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { progresos } from '../mostrar-progresos/mostrar-progresos-datasource';

@Component({
  selector: 'app-agregar-progresos',
  templateUrl: './agregar-progresos.component.html',
  styleUrls: ['./agregar-progresos.component.css']
})
export class AgregarprogresosComponent {
  addressForm = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    peso_inicial: ['', Validators.required],
    peso_meta: ['', Validators.required],
    tallas_inicial: ['', Validators.required],
    tallas_meta: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private progresosService: progresosService, private router:Router) {}

  onAgregar(){
    /*console.log(this.form)*/

    const progresos:progresos ={
      id:this.addressForm.value.id,
      id_persona:this.addressForm.value.id_persona,
      peso_inicial:this.addressForm.value.peso_inicial,
      peso_meta:this.addressForm.value.peso_meta,
      tallas_inicial:this.addressForm.value.tallas_inicial,
      tallas_meta:this.addressForm.value.tallas_meta,
    }
    /*console.log(persona);*/

    this.progresosService.postprogresos(progresos);
    this.router.navigate(['/progresos']);
    setTimeout(location.reload.bind(location), 500);

  }
}
