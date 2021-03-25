/*esta directiva es para poder cambiar desde el html el color de fondo y de letre, ya que los recibe por parametros
no me funciona*/
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCambio]'
})
export class CambioDirective implements OnInit{

  constructor(
    private element: ElementRef
    ) { }

    @Input() backgroundColor: string;
    @Input() color: string;

    ngOnInit(): void{
      this.element.nativeElement.style.backgroundColor = this.backgroundColor;
      this.element.nativeElement.style.color = this.color;
    }
}
