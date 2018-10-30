import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.getListProducts();
  }

  products: Product[];

  getListProducts() {
    this.service.getProductsList();
  }
  deleteProduct(id) {
    this.service.deleteProduct(id);
  }

  updateProduct(id, property, value) {
    this.service.updateProduct(id, property, value)
  }
}
