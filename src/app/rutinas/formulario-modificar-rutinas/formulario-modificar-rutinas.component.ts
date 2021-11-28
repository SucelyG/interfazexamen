import {rutinasService } from '../services/rutinas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { rutinas } from '../mostrar-tabla-rutinas/mostrar-tabla-rutinas-datasource';

@Component({
  selector: 'app-formulario-modificar-rutinas',
  templateUrl: './formulario-modificar-rutinas.component.html',
  styleUrls: ['./formulario-modificar-rutinas.component.css']
})
export class FormularioModificarRutinasComponent {

  rutinas:rutinas ={
    id: '',
    rutinas: '',
    lista_rutina: ''
  }

  Form = this.fb.group({
    id: null,
    rutinas: [null, Validators.required],
    lista_rutina: [null, Validators.required]
  });

  constructor(private fb: FormBuilder,
    private router:Router,
    private rutinasService:rutinasService,
    private activeRoute:ActivatedRoute) {}


    ngOnInit(): void{
      const id_entrada = <string>this.activeRoute.snapshot.params.id;
      console.log('id de entrada: '+id_entrada);

      if(id_entrada){
        this.rutinasService.getIdrutinas(id_entrada).subscribe(
          (res:any) =>{
            this.rutinas=res[0];
            console.log(res[0]);
          },
          err=>console.log(err)
        )
      }

    }
    onActualizar(){
      this.rutinasService.putrutinas(this.rutinas.id, this.rutinas);
      this.router.navigate(['/rutinas'])

    }
}
