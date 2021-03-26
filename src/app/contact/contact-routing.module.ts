import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
    {
        path: '',
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
