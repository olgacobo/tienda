import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'; // para los botones
import { MatToolbarModule } from '@angular/material/toolbar'; // para la barra de navegacion
import { MatIconModule } from '@angular/material/icon'; // para los iconos
import { MatBadgeModule } from '@angular/material/badge'; // para la cesta de la compra
import { MatCardModule } from '@angular/material/card'; // para el cuadro de los productos
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
