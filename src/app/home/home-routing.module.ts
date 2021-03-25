import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
    imports: [
        // que use RouteModule para unas rutas específicas, en este caso las de la variable routes
        RouterModule.forChild(routes)
    ],
    exports: [ //para que otros modulos lo puedan usar
        RouterModule
    ]
})
export class HomeRoutingModule{}