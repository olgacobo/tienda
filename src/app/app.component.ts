import { Component } from '@angular/core';


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

 


  // creo una funcion metodo para añadir items (todos se llamaran nuevo item)
  addItem(){
    this.items.push('nuevo item');
  }

  // creo un metodo para borrar items
  deleteItem(index: number){
    this.items.splice(index, 1); // la posicion que queremos borrar, y cuantos elementos queremos borrar a partir de esa posicion
  }

  

}
