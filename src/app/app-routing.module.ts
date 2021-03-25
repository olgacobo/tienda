import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ProductsComponent } from './products/products.component';

import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';


// importante poner en el app.component.html <router-outlet></router-outlet>
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [ // todos estos componentes aplicaran el layout
      {
        path: '',
        redirectTo: '/home',
        // lo madamos a la pagina de home cuando el pathmartch sea full, cunado tengamos la url en seco, sin ningun path
        pathMatch: 'full',
      },
      {
        path: 'home',
        // component: HomeComponent
        // ahora llamaremos al modulo del home
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id', // no puede ser solo products porque colisionarian las rutas, va a renderizar el productdetailcomponent
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'demo',
        component: DemoComponent
      },
      {
        path: '**', // significa que no hubo match
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  // le vamos a decir que dinamicamente escoja una estrategia de precarga
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
