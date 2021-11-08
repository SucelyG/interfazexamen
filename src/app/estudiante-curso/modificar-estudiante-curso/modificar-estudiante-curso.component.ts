import { EstudianteCursoService } from './../services/estudiante-curso.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EstudianteCurso } from '../mostrar-estudiante-curso/mostrar-estudiante-curso-datasource';

@Component({
  selector: 'app-modificar-estudiante-curso',
  templateUrl: './modificar-estudiante-curso.component.html',
  styleUrls: ['./modificar-estudiante-curso.component.css']
})
export class ModificarEstudianteCursoComponent {
  estudianteCurso: EstudianteCurso ={
    id: '',
    id_estudiante: '',
    estudiante: '',
    id_curso: '',
    nombre: '',
    status: '',
    fecha_inicio: '',
    fecha_fin: ''
  }

  addressForm = this.fb.group({
    id: [''],
    id_estudiante: ['', Validators.required],
    estudiante: [''],
    id_curso: ['', Validators.required],
    nombre: [''],
    status: ['', Validators.required],
    fecha_inicio: ['', Validators.required],
    fecha_fin: ['', Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router:Router,
    private activeRoute:ActivatedRoute,
    private estudianteCursoService:EstudianteCursoService) {}

    ngOnInit(): void{
      const id_entrada = <string>this.activeRoute.snapshot.params.id;
      console.log('id de entrada: '+id_entrada);

      if(id_entrada){
        this.estudianteCursoService.getIdEstudianteCurso(id_entrada).subscribe(
          (res:any) =>{
            this.estudianteCurso=res[0];
            console.log(res[0]);
          },
          err=>console.log(err)
        )
      }

    }
    onActualizar(){
      this.estudianteCursoService.putEstudianteCursos(this.estudianteCurso.id, this.estudianteCurso);
      this.router.navigate(['/estudiante-curso'])

    }
}
