import { DocenteCursoService } from './../services/docente-curso.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DocenteCurso } from '../mostrar-docente-curso/mostrar-docente-curso-datasource';

@Component({
  selector: 'app-modificar-docente-curso',
  templateUrl: './modificar-docente-curso.component.html',
  styleUrls: ['./modificar-docente-curso.component.css']
})
export class ModificarDocenteCursoComponent {

  docenteCurso: DocenteCurso ={
    id: '',
    id_docente: '',
    docente: '',
    id_curso: '',
    curso: '',
    stauts: '',
    fecha_inicio: '',
    fecha_fin: ''
  }

  addressForm = this.fb.group({
    id: [''],
    id_docente: ['', Validators.required],
    docente: [''],
    id_curso: ['', Validators.required],
    curso: [''],
    stauts: ['', Validators.required],
    fecha_inicio: ['', Validators.required],
    fecha_fin: ['', Validators.required]
  });


  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router:Router,
    private activeRoute:ActivatedRoute,
    private docenteCursoService:DocenteCursoService) {}

    ngOnInit(): void{
      const id_entrada = <string>this.activeRoute.snapshot.params.id;
      console.log('id de entrada: '+id_entrada);

      if(id_entrada){
        this.docenteCursoService.getIdDocenteCurso(id_entrada).subscribe(
          (res:any) =>{
            this.docenteCurso=res[0];
            console.log(res[0]);
          },
          err=>console.log(err)
        )
      }

    }
    onActualizar(){
      this.docenteCursoService.putDocenteCursos(this.docenteCurso.id, this.docenteCurso);
      this.router.navigate(['/docente-curso'])

    }
}
