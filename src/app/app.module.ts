import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // añado el paquete de formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// importo la clase que he creado en product component
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component'; // componente creado desde la cmd

import { ProductsComponent } from './products/products.component';

import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';
import {CoreModule  } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, // añado la clase
    CartComponent,
    ProductsComponent,
    DemoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent // añadida automaticamente al crearlo desde cmd con ng g d nombreDirectiva
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // formularios de angular, lo ponemos aqui para que tenga consecuencia en nuestros imports
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
