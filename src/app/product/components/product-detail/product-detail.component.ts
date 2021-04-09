import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; // la primera es una inyeccion de dependencia, la segunta un tipado 
import { ProductsService } from '../../../core/services/products/products.service'; // inyección de dependencias
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  // creo una variable publica para que el dominio de la funcion llegue al template
  producto: Product;

  constructor(/*los inyectamos, inyeccion de dependencias*/
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // le decimos que quiero los parametros que tenga en la ruta, y me subscribo a esos cambios de tipo params
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProducto(id);
    });
  }

  fetchProducto(id: string){
    this.productsService.getProduct(id).subscribe(producto => {
    this.producto = producto;
    });
  }

  // cuando de al click y esto se ejecute, manda la info a createProduct que la enviara como bosy a la api
  createProduct() {
    const newProduct: Product = {
      id: '100',
      title: 'rober desde angular',
      image: 'assets/images/rober.jpeg',
      price: 10,
      description: 'nuevo producto blabla'
    };
    this.productsService.createProduct(newProduct).subscribe(producto => {
    console.log(producto);
    });
  }

}
