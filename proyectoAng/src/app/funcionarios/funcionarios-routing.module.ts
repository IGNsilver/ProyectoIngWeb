import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionariosComponent } from './funcionarios.component';

const appRoute: Routes = [
    { path: ''},
    { path: 'funcionarios', component: FuncionariosComponent }
];

NgModule({
    imports: [
        RouterModule.forChild(appRoute)
    ],
    exports: [
        RouterModule
    ]
 })

 export class FuncionariosRoutingModule {}