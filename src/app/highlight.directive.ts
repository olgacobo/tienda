import { Directive, ElementRef } from '@angular/core'; //ElementRef es el que modificca el comportamiento por defecto del DOM

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(  //hacemos una inyeccion de dependencias
    element: ElementRef
  ) {
    /* hago referencia a ese elemento, pido el elemento nativo de html y lo modifico con style y cambio su color de fondo, 
    luego me voy al html y añado el nombre del selector de la directiva dentro de la etiqueta que quiero y cambio su fondo*/
    element.nativeElement.style.backgroundColor = 'red';
   }

}
