import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { EstadoPacientesComponent } from '../estado-pacientes/estado-pacientes.component';
import { EstadoRecursosComponent } from '../estado-recursos/estado-recursos.component';
import { FuncionariosComponent } from '../funcionarios/funcionarios.component';
import { HorariosComponent } from '../horarios/horarios.component';

const appRoute: Routes = [
    { path: '', component: HomeComponent },
    { path: 'estado-pacientes', component: EstadoPacientesComponent },
    { path: 'estado-recursos', component: EstadoRecursosComponent },
    { path: 'funcionarios', component: FuncionariosComponent },
    { path: 'horarios', component: HorariosComponent }
];


@NgModule({
    imports: [
        RouterModule.forChild(appRoute)
    ],
    exports: [
        RouterModule
    ]
 })
export class HomeRoutingModule {}