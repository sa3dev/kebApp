import { Injectable } from '@angular/core';
import { ProductsService } from '../../core/products/products.service';
import { Product } from 'src/app/core/products/product.model';
import { HttpClient } from '@angular/common/http';
import { apiURLProducts } from '../../config';
import { Router } from '@angular/router';
 
@Injectable({
  	providedIn: 'root'
})
export class StockService {

	constructor( 
		private productService : ProductsService ,
		private httpClient : HttpClient,
		private router : Router
		) { }

	getProducts(){
		this.productService.getProductsList();
	}

	addProduct(product : Product) {
		this.httpClient.post( apiURLProducts ,product)
		  .subscribe(
			data => {
			  console.log("POST Request is successful ", data);
			  this.router.navigate(['login'])
			},
			error => {
			  console.log("Error", error);
			}
		  );
	  }
}
