import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { DemoComponent } from './demo/components/demo/demo.component';
import { LayoutComponent } from './layout/layout.component';

// import { AdminGuard } from './admin.guard';

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
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**', // significa que no hubo match
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
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
