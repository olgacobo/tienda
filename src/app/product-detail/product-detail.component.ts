import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; //la primera es una inyeccion de dependencia, la segunta un tipado 
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // console.log(params);
      const producto = this.productsService.getProduct(id);
      console.log(producto);
    });
  }

}
