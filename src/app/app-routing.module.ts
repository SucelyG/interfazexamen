import { ModificarprogresosComponent } from './progresos/modificar-progresos/modificar-progresos.component';
import { MostrardietaComponent } from './dietas/mostrar-dietas/mostrar-dietas.component';
import { ModificardietaComponent } from './dietas/modificar-dietas/modificar-dietas.component';
import { AgregardietaComponent } from './dietas/agregar-dietas/agregar-dietas.component';
import { AuthGuard } from './auth.guard';
import { LoginFormularioComponent } from './public/login-formulario/login-formulario.component';
import { MostrarentrenadorComponent } from './entrenador/mostrar-entrenador/mostrar-entrenador.component';
import { AgregarentrenadorComponent } from './entrenador/agregar-entrenador/agregar-entrenador.component';
import { ModificarentrenadorComponent } from './entrenador/modificar-entrenador/modificar-entrenador.component';
import { ModificarclienteComponent } from './clientes/modificar-clientes/modificar-clientes.component';
import { AgregarclienteComponent } from './clientes/agregar-clientes/agregar-clientes.component';
import { MostrarclienteComponent } from './clientes/mostrar-clientes/mostrar-clientes.component';
import { EditarFormularioComponent } from './personas/editar-formulario/editar-formulario.component';
import { MiTablaComponent } from './personas/mi-tabla/mi-tabla.component';
import { MiFormularioComponent } from './personas/mi-formulario/mi-formulario.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarentrenosComponent } from './entrenos/mostrar-entrenos/mostrar-entrenos.component';
import { AgregarentrenosComponent } from './entrenos/agregar-entrenos/agregar-entrenos.component';
import { ModificarentrenosComponent } from './entrenos/modificar-entrenos/modificar-entrenos.component';
import { MostrarprogresosComponent } from './progresos/mostrar-progresos/mostrar-progresos.component';
import { AgregarprogresosComponent } from './progresos/agregar-progresos/agregar-progresos.component';

import { MostrarTablaRutinasComponent   } from './rutinas/mostrar-tabla-rutinas/mostrar-tabla-rutinas.component';
import { FormularioAgregarRutinasComponent } from './rutinas/formulario-agregar-rutinas/formulario-agregar-rutinas.component';
import { FormularioModificarRutinasComponent } from './rutinas/formulario-modificar-rutinas/formulario-modificar-rutinas.component';



const routes: Routes = [
  {path: '', component:  LoginFormularioComponent},
  {path: 'login', component:  LoginFormularioComponent},

  {path: 'personas', component:  MiTablaComponent},
  {path: 'agregar', component: MiFormularioComponent},
  {path: 'edit/:id', component: EditarFormularioComponent},

  {path: 'cliente', component: MostrarclienteComponent},
  {path: 'agregarcliente', component: AgregarclienteComponent},
  {path: 'editar/:id', component: ModificarclienteComponent},

  {path: 'entrenador', component: MostrarentrenadorComponent},
  {path: 'agregar-entrenadors', component: AgregarentrenadorComponent},
  {path: 'editar-entrenador/:id', component: ModificarentrenadorComponent},

  {path: 'dieta', component: MostrardietaComponent},
  {path: 'agregar-dieta', component: AgregardietaComponent},
  {path: 'editar-dieta/:id', component: ModificardietaComponent},

  {path: 'entrenos', component: MostrarentrenosComponent},
  {path: 'agregar-entrenos', component: AgregarentrenosComponent},
  {path: 'editar-entrenos/:id', component: ModificarentrenosComponent},

  {path: 'progresos', component: MostrarprogresosComponent},
  {path: 'agregar-progresos', component: AgregarprogresosComponent},
  {path: 'editar-progresos/:id', component: ModificarprogresosComponent},

  {path: 'rutinas', component: MostrarTablaRutinasComponent},
  {path: 'agregar-rutinas', component: FormularioAgregarRutinasComponent},
  {path: 'editar-rutinas/:id', component: FormularioModificarRutinasComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
