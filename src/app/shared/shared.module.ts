import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
