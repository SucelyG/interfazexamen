import { clienteService } from '../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { cliente } from '../mostrar-clientes/mostrar-clientes-datasource';

@Component({
  selector: 'app-modificar-clientes',
  templateUrl: './modificar-clientes.component.html',
  styleUrls: ['./modificar-clientes.component.css']
})
export class ModificarclienteComponent implements OnInit {

  cliente: cliente ={
    id: '',
    id_persona: '',
    id_rutina: '',
    id_entrenos: '',
    id_dieta: '',
    status: ''
  }

  form = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    id_rutina: ['', Validators.required],
    id_entrenos: ['', Validators.required],
    id_dieta: ['', Validators.required],
    status: ['']
  });

  constructor(private fb: FormBuilder, private router:Router,
              private clienteService: clienteService,
              private activeRoute:ActivatedRoute) {}

  ngOnInit(): void{
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.clienteService.getIdcliente(id_entrada).subscribe(
        (res:any) =>{
          this.cliente=res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      )
    }

  }
  onActualizar(){
    this.clienteService.putcliente(this.cliente.id, this.cliente);
    this.router.navigate(['/cliente']);

  }
}
