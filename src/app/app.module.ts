import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // añado el paquete de formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// importo la clase que he creado en product component
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component'; // componente creado desde la cmd
import { ExponentialPipe } from './pipes/exponential.pipe'; // pipe que he creado con ng g p exponential, importado automaticamente
import { HighlightDirective } from './directivas/highlight.directive';
import { CambioDirective } from './directivas/cambio.directive';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component'; // directiva que he creado con ng g d highlight, importado automaticamente

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, // añado la clase
    CartComponent,
    ExponentialPipe, // añadida automaticamente al crearlo desde cmd con ng g p nombrePipe
    HighlightDirective,
    CambioDirective,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent // añadida automaticamente al crearlo desde cmd con ng g d nombreDirectiva
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
