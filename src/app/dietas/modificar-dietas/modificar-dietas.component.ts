import { dietaService } from './../services/dietas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dieta } from '../mostrar-dietas/mostrar-dietas-datasource';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-dietas',
  templateUrl: './modificar-dietas.component.html',
  styleUrls: ['./modificar-dietas.component.css']
})
export class ModificardietaComponent {

  dieta: dieta ={
    id: '',
    dietas: '',
    listado_de_dietas: '',
    fecha_inicio: '',
    fecha_fin: '',
    id_persona: ''
  }

  addressForm = this.fb.group({
    id: [''],
    dietas: ['', Validators.required],
    listado_de_dietas: ['', Validators.required],
    fecha_inicio: ['',Validators.required],
    fecha_fin: ['', Validators.required],
    id_persona: ['', Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router:Router,
    private activeRoute:ActivatedRoute,
    private dietaService:dietaService) {}

    ngOnInit(): void{
      const id_entrada = <string>this.activeRoute.snapshot.params.id;
      console.log('id de entrada: '+id_entrada);

      if(id_entrada){
        this.dietaService.getIddieta(id_entrada).subscribe(
          (res:any) =>{
            this.dieta=res[0];
            console.log(res[0]);
          },
          err=>console.log(err)
        )
      }

    }
    onActualizar(){
      this.dietaService.putdieta(this.dieta.id, this.dieta);
      this.router.navigate(['/dieta'])

    }
}
