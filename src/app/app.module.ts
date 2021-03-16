import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // añado el paquete de formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// importo la clase que he creado en product component
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, // añado la clase
    CartComponent // añadida automaticamente al crearlo desde comandos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // formularios de angular, lo ponemos aqui para que tenga consecuencia en nuestros imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
