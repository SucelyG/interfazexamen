import { InterceptorService } from './services/interceptor.service';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MiTablaComponent } from './personas/mi-tabla/mi-tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MiFormularioComponent } from './personas/mi-formulario/mi-formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarFormularioComponent } from './personas/editar-formulario/editar-formulario.component';
import { MostrarclienteComponent } from './clientes/mostrar-clientes/mostrar-clientes.component';
import { AgregarclienteComponent } from './clientes/agregar-clientes/agregar-clientes.component';
import { ModificarclienteComponent } from './clientes/modificar-clientes/modificar-clientes.component';
import { MostrarentrenadorComponent } from './entrenador/mostrar-entrenador/mostrar-entrenador.component';
import { AgregarentrenadorComponent } from './entrenador/agregar-entrenador/agregar-entrenador.component';
import { ModificarentrenadorComponent } from './entrenador/modificar-entrenador/modificar-entrenador.component';
import { LoginFormularioComponent } from './public/login-formulario/login-formulario.component';
import { MostrardietaComponent } from './dietas/mostrar-dietas/mostrar-dietas.component';
import { AgregardietaComponent } from './dietas/agregar-dietas/agregar-dietas.component';
import { ModificardietaComponent } from './dietas/modificar-dietas/modificar-dietas.component';
import { MostrarentrenosComponent } from './entrenos/mostrar-entrenos/mostrar-entrenos.component';
import { AgregarentrenosComponent } from './entrenos/agregar-entrenos/agregar-entrenos.component';
import { ModificarentrenosComponent } from './entrenos/modificar-entrenos/modificar-entrenos.component';
import { MostrarprogresosComponent } from './progresos/mostrar-progresos/mostrar-progresos.component';
import { AgregarprogresosComponent } from './progresos/agregar-progresos/agregar-progresos.component';
import { ModificarprogresosComponent } from './progresos/modificar-progresos/modificar-progresos.component';
import { FormularioAgregarRutinasComponent } from './rutinas/formulario-agregar-rutinas/formulario-agregar-rutinas.component';
import { FormularioModificarRutinasComponent } from './rutinas/formulario-modificar-rutinas/formulario-modificar-rutinas.component';
import { MostrarTablaRutinasComponent } from './rutinas/mostrar-tabla-rutinas/mostrar-tabla-rutinas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MiTablaComponent,
    MiFormularioComponent,
    EditarFormularioComponent,
    MostrarclienteComponent,
    AgregarclienteComponent,
    ModificarclienteComponent,
    MostrarentrenadorComponent,
    AgregarentrenadorComponent,
    ModificarentrenadorComponent,
    LoginFormularioComponent,
    MostrardietaComponent,
    AgregardietaComponent,
    ModificardietaComponent,
    MostrarentrenosComponent,
    AgregarentrenosComponent,
    ModificarentrenosComponent,
    MostrarprogresosComponent,
    AgregarprogresosComponent,
    ModificarprogresosComponent,
    FormularioAgregarRutinasComponent,
    FormularioModificarRutinasComponent,
    MostrarTablaRutinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
