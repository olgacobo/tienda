import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
        path: 'contact',
        component: ContactComponent
    }
];

@NgModule({
    imports: [
        // que use RouteModule para unas rutas específicas, en este caso las de la variable routes
        RouterModule.forChild(routes)
    ],
    exports: [ // para que otros modulos lo puedan usar
        RouterModule
    ]
})
export class ContactRoutingModule{}
