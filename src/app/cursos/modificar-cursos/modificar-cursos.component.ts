import { CursosService } from './../services/cursos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Curso } from './../mostar-cursos/mostar-cursos-datasource';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-cursos',
  templateUrl: './modificar-cursos.component.html',
  styleUrls: ['./modificar-cursos.component.css']
})
export class ModificarCursosComponent {

  curso: Curso ={
    id: '',
    nombre: '',
    descripcion: ''
  }

  addressForm = this.fb.group({
    id: [''],
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router:Router,
    private activeRoute:ActivatedRoute,
    private cursosService:CursosService) {}

    ngOnInit(): void{
      const id_entrada = <string>this.activeRoute.snapshot.params.id;
      console.log('id de entrada: '+id_entrada);

      if(id_entrada){
        this.cursosService.getIdCurso(id_entrada).subscribe(
          (res:any) =>{
            this.curso=res[0];
            console.log(res[0]);
          },
          err=>console.log(err)
        )
      }

    }
    onActualizar(){
      this.cursosService.putCursos(this.curso.id, this.curso);
      this.router.navigate(['/cursos'])

    }
}
