import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'tienda'; // variables que puedo mostrar en mi html

  items = ['Olga', 'Violeta', 'Tania']; // creo array


  // creo e inicializo un power para usar la pipe
  power = 10;

  ngOnInit(): void {
  }

  // creo una funcion metodo para añadir items (todos se llamaran nuevo item)
  addItem(){
    this.items.push('nuevo item');
  }

  // creo un metodo para borrar items
  deleteItem(index: number){
    this.items.splice(index, 1); // la posicion que queremos borrar, y cuantos elementos queremos borrar a partir de esa posicion
  }

  

}
