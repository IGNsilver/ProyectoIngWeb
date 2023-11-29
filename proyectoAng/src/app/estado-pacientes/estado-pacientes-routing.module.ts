import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstadoPacientesComponent } from './estado-pacientes.component';

const appRoute: Routes = [
    { path: ''},
    { path: 'estado-pacientes', component: EstadoPacientesComponent }
];

NgModule({
    imports: [
        RouterModule.forChild(appRoute)
    ],
    exports: [
        RouterModule
    ]
 })

 export class EstadoPacientesRoutingModule {}