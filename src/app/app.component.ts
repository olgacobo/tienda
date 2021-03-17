import { Component } from '@angular/core';
import { Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tienda'; // variables que puedo mostrar en mi html

  items = ['Olga', 'Violeta', 'Tania']; // creo array


  // creo e inicializo un power para usar la pipe
  power = 10;

  // creo mi array de productos, importante []
  products: Product[] = [
    {
      id: '1',
      image: 'assets/img/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Descripcion de la camiseta'
    },
    {
      id: '2',
      image: 'assets/img/hoodie.png',
      title: 'Sudadera',
      price: 80000,
      description: 'Descripcion de la sudadera '
    },
    {
      id: '3',
      image: 'assets/img/mug.png',
      title: 'Taza',
      price: 60000,
      description: 'Descripcion de la taza'
    },
    {
      id: '4',
      image: 'assets/img/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'Descripcion del pin'
    },
    {
      id: '5',
      image: 'assets/img/stickers1.png',
      title: 'Stickers',
      price: 3000,
      description: 'Descripcion del sticker 1'
    },
    {
      id: '6',
      image: 'assets/img/stickers2.png',
      title: 'Stickers',
      price: 200,
      description: 'Descripcion del sticker 2'
    }
  ];


  // creo una funcion metodo para añadir items (todos se llamaran nuevo item)
  addItem(){
    this.items.push('nuevo item');
  }

  // creo un metodo para borrar items
  deleteItem(index: number){
    this.items.splice(index, 1); // la posicion que queremos borrar, y cuantos elementos queremos borrar a partir de esa posicion
  }

  // creo una funcion para sacar el output
  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }

}
