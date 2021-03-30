import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // añado el paquete de formularios
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component'; // componente creado desde la cmd


import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule  } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // formularios de angular, lo ponemos aqui para que tenga consecuencia en nuestros imports
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
