import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; // la primera es una inyeccion de dependencia, la segunta un tipado 
import { ProductsService } from '../core/services/products/products.service'; // inyección de dependencias
import { Product } from '../product.model';


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
    this.route.params.subscribe((params: Params) => {

      const id = params.id;
      // console.log(params);
      // hago referencia para que vaya y busque en ese array un id especifico, getProduct está en products.service.ts
      // ! es para que no de error this.product ya que implica que no importa si el datos que devuelve es undefined
      this.producto = this.productsService.getProduct(id)!;
      // esto al poner la ruta mostraria todos los detalles del producto en la consola
      // console.log(producto);
    });
  }

}
