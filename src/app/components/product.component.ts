/* decorador da contexto, es la manera en que angular puede saber que
tipo de error va a servir esta clase*/
import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

// creo la clase
export class ProductComponent implements /*OnChanges,*/ OnInit, DoCheck, OnDestroy {

    @Input() product: Product;
    // creo un evento, any significa el tipo que necesita, en este caso cualquiera
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    // creo el constructor, para ver cuando se ejecuta
    constructor(){
        console.log('1. constructor');
    }

    // ngOnchanges, hay que implementar una interfaz de llamada, arriba
    // tslint:disable-next-line: typedef
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2. ngOnchanges');
    //     console.log(changes);
    // }

    ngOnInit(){
        console.log('3. ngOnInit');
    }
    // colisiona con ngOnChanges, ya que los 2 detectan cambios
    ngDoCheck(){
        console.log('4. ngDoCheck');
    }

    // se ejecuta cuando eliminamos algun elemento
    ngOnDestroy(){
        console.log('5. ngOnDestroy');
    }

    // tslint:disable-next-line: typedef
    addCesta(){
        console.log('añadir al carrito');
        // el valor a emitir va a ser la id del producto, valor que manda el padre al hijo mediante el evento
        this.productClicked.emit(this.product.id);
    }
}
