import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { EstadoPacientesComponent } from './estado-pacientes/estado-pacientes.component';
import { EstadoRecursosComponent } from './estado-recursos/estado-recursos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { HorariosComponent } from './horarios/horarios.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadoPacientesComponent,
    EstadoRecursosComponent,
    FuncionariosComponent,
    HorariosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
