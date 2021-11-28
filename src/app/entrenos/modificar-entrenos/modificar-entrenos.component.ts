import { entrenosService } from './../services/entrenos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { entrenos } from '../mostrar-entrenos/mostrar-entrenos-datasource';

@Component({
  selector: 'app-modificar-entrenos',
  templateUrl: './modificar-entrenos.component.html',
  styleUrls: ['./modificar-entrenos.component.css']
})
export class ModificarentrenosComponent {
  entrenos: entrenos ={
    id: '',
    id_entrenador: '',
    id_rutinas: '',
    id_persona: ''
  }

  addressForm = this.fb.group({
    id: [''],
    id_entrenador: ['', Validators.required],
    id_rutinas: ['', Validators.required],
    id_persona: ['', Validators.required]

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router:Router,
    private activeRoute:ActivatedRoute,
    private entrenosService:entrenosService) {}

    ngOnInit(): void{
      const id_entrada = <string>this.activeRoute.snapshot.params.id;
      console.log('id de entrada: '+id_entrada);

      if(id_entrada){
        this.entrenosService.getIdentrenos(id_entrada).subscribe(
          (res:any) =>{
            this.entrenos=res[0];
            console.log(res[0]);
          },
          err=>console.log(err)
        )
      }

    }
    onActualizar(){
      this.entrenosService.putentrenos(this.entrenos.id, this.entrenos);
      this.router.navigate(['/entrenos'])

    }
}
