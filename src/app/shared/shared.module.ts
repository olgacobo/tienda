import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importante para que los enlaces funcionen
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directivas/highlight/highlight.directive';
import { CambioDirective } from './directivas/cambio/cambio.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe, // añadida automaticamente al crearlo desde cmd con ng g p nombrePipe
    HighlightDirective,
    CambioDirective
  ],
  exports: [
    // importante para que podamos usarlos desde cualquier modulo al que importemos shared
    HeaderComponent,
    FooterComponent,
    ExponentialPipe, 
    HighlightDirective,
    CambioDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
