import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstadoRecursosComponent } from './estado-recursos.component';

const appRoute: Routes = [
    { path: ''},
    { path: 'estadoRecursos', component: EstadoRecursosComponent }
];

NgModule({
    imports: [
        RouterModule.forChild(appRoute)
    ],
    exports: [
        RouterModule
    ]
 })

 export class EstadoRecursosRoutingModule {}