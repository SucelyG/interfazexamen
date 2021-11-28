import { progresosService } from '../services/progresos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { progresos } from '../mostrar-progresos/mostrar-progresos-datasource';

@Component({
  selector: 'app-modificar-progresos',
  templateUrl: './modificar-progresos.component.html',
  styleUrls: ['./modificar-progresos.component.css']
})
export class ModificarprogresosComponent {

  progresos: progresos ={
    id: '',
    id_persona: '',
    peso_inicial: '',
    peso_meta: '',
   tallas_inicial: '',
    tallas_meta: ''

  }

  addressForm = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    peso_inicial: ['', Validators.required],
    peso_meta: ['', Validators.required],
    tallas_inicial: ['', Validators.required],
    tallas_meta: ['', Validators.required]
  });


  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router:Router,
    private activeRoute:ActivatedRoute,
    private progresosService:progresosService) {}

    ngOnInit(): void{
      const id_entrada = <string>this.activeRoute.snapshot.params.id;
      console.log('id de entrada: '+id_entrada);

      if(id_entrada){
        this.progresosService.getIdprogresos(id_entrada).subscribe(
          (res:any) =>{
            this.progresos=res[0];
            console.log(res[0]);
          },
          err=>console.log(err)
        )
      }

    }
    onActualizar(){
      this.progresosService.putprogresos(this.progresos.id, this.progresos);
      this.router.navigate(['/progresos'])

    }
}
