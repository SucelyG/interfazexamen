import { entrenadorService } from '../services/entrenador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { entrenador } from '../mostrar-entrenador/mostrar-entrenador-datasource';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-entrenador',
  templateUrl: './modificar-entrenador.component.html',
  styleUrls: ['./modificar-entrenador.component.css']
})
export class ModificarentrenadorComponent implements OnInit  {

  entrenador:entrenador ={
    id: '',
    id_persona: '',
    status: ''
  }

  form = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    status: ['', Validators.required]

  });

  constructor(private fb: FormBuilder,
              private router:Router,
              private entrenadorService:entrenadorService,
              private activeRoute:ActivatedRoute) {}

  ngOnInit(): void{
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.entrenadorService.getIdentrenador(id_entrada).subscribe(
        (res:any) =>{
          this.entrenador=res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      )
    }

  }
  onActualizar(){
    this.entrenadorService.putentrenador(this.entrenador.id, this.entrenador);
    this.router.navigate(['/entrenador'])

  }
}
