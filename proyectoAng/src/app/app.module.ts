import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstadoPacientesComponent } from './estado-pacientes/estado-pacientes.component';
import { EstadoRecursosComponent } from './estado-recursos/estado-recursos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { HorariosComponent } from './horarios/horarios.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadoPacientesComponent,
    EstadoRecursosComponent,
    FuncionariosComponent,
    HorariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
