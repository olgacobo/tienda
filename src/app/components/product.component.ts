/* decorador da contexto, es la manera en que angular puede saber que 
tipo de error va a servir esta clase*/
import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html'
})

// creo la clase
export class ProductComponent{
    product: Product ={
        id: '1',
      image: 'assets/img/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Descripcion de la camiseta'
    }
}