import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model'; // importamos la intetrfaz
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // creo mi array de productos, importante []
  // products: Product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/img/camiseta.png',
  //     title: 'Camiseta',
  //     price: 80000,
  //     description: 'Descripcion de la camiseta'
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/img/hoodie.png',
  //     title: 'Sudadera',
  //     price: 80000,
  //     description: 'Descripcion de la sudadera '
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/img/mug.png',
  //     title: 'Taza',
  //     price: 60000,
  //     description: 'Descripcion de la taza'
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/img/pin.png',
  //     title: 'Pin',
  //     price: 80000,
  //     description: 'Descripcion del pin'
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/img/stickers1.png',
  //     title: 'Stickers',
  //     price: 3000,
  //     description: 'Descripcion del sticker 1'
  //   },
  //   {
  //     id: '6',
  //     image: 'assets/img/stickers2.png',
  //     title: 'Stickers',
  //     price: 200,
  //     description: 'Descripcion del sticker 2'
  //   }
  // ];

  constructor(
    private http: HttpClient
  ) { }

  // creo metodo para devolver todos los datos de nuestros productos
  // tslint:disable-next-line: typedef
  getAllProducts(){
    return this.http.get('http://platzi-store.herokuapp.com/products'); // para obtener los datos de nuestra api
  }

  // metodo para buscar un id y que me devuelva todos los datos, recibe un id, la funcion find de js que mandamos un arrayFunction 
  // y si coincide con el id nos devuelve los datos
  // tslint:disable-next-line: typedef
  getProduct(id: string) {
    // hago la concatenacion de la peticion con el id, `` acentos
    return this.http.get(`http://platzi-store.herokuapp.com/products${id}`);
  }
}
