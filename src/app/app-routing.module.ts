import { ModificarDocenteCursoComponent } from './docente-curso/modificar-docente-curso/modificar-docente-curso.component';
import { MostarCursosComponent } from './cursos/mostar-cursos/mostar-cursos.component';
import { ModificarCursosComponent } from './cursos/modificar-cursos/modificar-cursos.component';
import { AgregarCursosComponent } from './cursos/agregar-cursos/agregar-cursos.component';
import { AuthGuard } from './auth.guard';
import { LoginFormularioComponent } from './public/login-formulario/login-formulario.component';
import { MostrarDocentesComponent } from './docentes/mostrar-docentes/mostrar-docentes.component';
import { AgregarDocentesComponent } from './docentes/agregar-docentes/agregar-docentes.component';
import { ModificarDocentesComponent } from './docentes/modificar-docentes/modificar-docentes.component';
import { ModificarComponent } from './estudiantes/modificar/modificar.component';
import { AgregarComponent } from './estudiantes/agregar/agregar.component';
import { MostrarComponent } from './estudiantes/mostrar/mostrar.component';
import { EditarFormularioComponent } from './personas/editar-formulario/editar-formulario.component';
import { MiTablaComponent } from './personas/mi-tabla/mi-tabla.component';
import { MiFormularioComponent } from './personas/mi-formulario/mi-formulario.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarEstudianteCursoComponent } from './estudiante-curso/mostrar-estudiante-curso/mostrar-estudiante-curso.component';
import { AgregarEstudianteCursoComponent } from './estudiante-curso/agregar-estudiante-curso/agregar-estudiante-curso.component';
import { ModificarEstudianteCursoComponent } from './estudiante-curso/modificar-estudiante-curso/modificar-estudiante-curso.component';
import { MostrarDocenteCursoComponent } from './docente-curso/mostrar-docente-curso/mostrar-docente-curso.component';
import { AgregarDocenteCursoComponent } from './docente-curso/agregar-docente-curso/agregar-docente-curso.component';

const routes: Routes = [
  {path: '', component:  LoginFormularioComponent},
  {path: 'login', component:  LoginFormularioComponent},

  {path: 'personas', component:  MiTablaComponent, canActivate:[AuthGuard]},
  {path: 'agregar', component: MiFormularioComponent},
  {path: 'edit/:id', component: EditarFormularioComponent},

  {path: 'estudiantes', component: MostrarComponent, canActivate:[AuthGuard]},
  {path: 'agregarestudiantes', component: AgregarComponent},
  {path: 'editar/:id', component: ModificarComponent},

  {path: 'maestros', component: MostrarDocentesComponent, canActivate:[AuthGuard]},
  {path: 'agregar-maestros', component: AgregarDocentesComponent},
  {path: 'editar-maestros/:id', component: ModificarDocentesComponent},

  {path: 'cursos', component: MostarCursosComponent, canActivate:[AuthGuard]},
  {path: 'agregar-cursos', component: AgregarCursosComponent},
  {path: 'editar-cursos/:id', component: ModificarCursosComponent},

  {path: 'estudiante-curso', component: MostrarEstudianteCursoComponent, canActivate:[AuthGuard]},
  {path: 'agregar-estudiante-curso', component: AgregarEstudianteCursoComponent},
  {path: 'editar-estudiante-curso/:id', component: ModificarEstudianteCursoComponent},

  {path: 'docente-curso', component: MostrarDocenteCursoComponent, canActivate:[AuthGuard]},
  {path: 'agregar-docente-curso', component: AgregarDocenteCursoComponent},
  {path: 'editar-docente-curso/:id', component: ModificarDocenteCursoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
