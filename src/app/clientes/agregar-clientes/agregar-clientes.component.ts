import { Router } from '@angular/router';
import { clienteService } from '../services/cliente.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { cliente} from '../mostrar-clientes/mostrar-clientes-datasource';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.css']
})
export class AgregarclienteComponent {
  form = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    id_rutina: ['', Validators.required],
    id_entrenos: ['', Validators.required],
    id_dieta: ['',Validators.required],
    status: ['',Validators.required]
  });



  constructor(private fb: FormBuilder, private clienteService:clienteService, private router:Router) {}

  onAgregar(){
    /*console.log(this.form)*/

    const cliente:cliente ={
      id:this.form.value.id,
      id_persona:this.form.value.id_persona,
      id_rutina:this.form.value.id_rutina,
      id_entrenos:this.form.value.id_entrenos,
      id_dieta: this.form.value.id_dieta,
      status:this.form.value.status
    }
    /*console.log(cliente);*/

    this.clienteService.postcliente(cliente);
    this.router.navigate(['/cliente']);
    setTimeout(location.reload.bind(location), 500);

  }
}
