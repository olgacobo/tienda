/* decorador da contexto, es la manera en que angular puede saber que 
tipo de error va a servir esta clase*/
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

// creo la clase
export class ProductComponent{
    @Input() product: Product;
    // creo un evento, any significa el tipo que necesita, en este caso cualquiera
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    // tslint:disable-next-line: typedef
    addCesta(){
        console.log('añadir al carrito');
        // el valor a emitir va a ser la id del producto, valor que manda el padre al hijo mediante el evento
        this.productClicked.emit(this.product.id);
    }
}
