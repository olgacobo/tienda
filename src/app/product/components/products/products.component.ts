import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

   // creo mi array de productos, importante []
   products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  // creo una funcion para sacar el output
  clickProduct(id: number): void{
    console.log('product');
    console.log(id);
  }

  // es para traer los productos de nuestra api
  fetchProducts(): void {
    // tslint:disable-next-line: deprecation
    this.productsService.getAllProducts().subscribe(products => {
      console.log(products);
    });
  }

}
