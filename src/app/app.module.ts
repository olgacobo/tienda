import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // añado el paquete de formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// importo la clase que he creado en product component
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component'; // componente creado desde la cmd

import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, // añado la clase
    CartComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent // añadida automaticamente al crearlo desde cmd con ng g d nombreDirectiva
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // formularios de angular, lo ponemos aqui para que tenga consecuencia en nuestros imports
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
