import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

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