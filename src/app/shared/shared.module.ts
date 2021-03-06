import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importante para que los enlaces funcionen
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directivas/highlight/highlight.directive';
import { CambioDirective } from './directivas/cambio/cambio.directive';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ExponentialPipe, // añadida automaticamente al crearlo desde cmd con ng g p nombrePipe
    HighlightDirective,
    CambioDirective
  ],
  exports: [
    // importante para que podamos usarlos desde cualquier modulo al que importemos shared
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    CambioDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
