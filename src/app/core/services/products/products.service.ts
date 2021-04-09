import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model'; // importamos la intetrfaz
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) { }

  // creo metodo para devolver todos los datos de nuestros productos
  // tslint:disable-next-line: typedef
  getAllProducts(){
    return this.http.get<Product[]>(environment.url_api); // para obtener los datos de nuestra api
  }

  // metodo para buscar un id y que me devuelva todos los datos, recibe un id, la funcion find de js que mandamos un arrayFunction 
  // y si coincide con el id nos devuelve los datos
  // tslint:disable-next-line: typedef
  getProduct(id: string) {
    // hago la concatenacion de la peticion con el id, `` acentos
    return this.http.get<Product>(`${environment.url_api}/${id}`);
  }

  // creo un método para poder añadir productos a la api
  // tslint:disable-next-line: typedef
  createProduct(product: Product){
    // el metodo post necesita una url y un body
    return this.http.post(environment.url_api, product);
  }
}
