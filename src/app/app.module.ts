import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // añado el paquete de formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// importo la clase que he creado en product component
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component'; // componente creado desde la cmd
import { ExponentialPipe } from './pipes/exponential.pipe'; // pipe que he creado con ng g p exponential, importado automaticamente
import { HighlightDirective } from './highlight.directive'; // directiva que he creado con ng g d highlight, importado automaticamente

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, // añado la clase
    CartComponent,
    ExponentialPipe, // añadida automaticamente al crearlo desde cmd con ng g p nombrePipe
    HighlightDirective // añadida automaticamente al crearlo desde cmd con ng g d nombreDirectiva
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
