import { Injectable } from '@angular/core';
import { ProductsService } from '../../core/products/products.service';
import { Product } from 'src/app/core/products/product.model';
import { HttpClient } from '@angular/common/http';
import { apiURLProducts } from '../../config';

import { Subject } from 'rxjs';
import { Router } from '@angular/router';
 
@Injectable({
  	providedIn: 'root'
})
export class StockService {

	productsubject = new Subject<Product[]>(); // notre subject 
	products : Product[];

	constructor( 
		private productService : ProductsService ,
		private httpClient : HttpClient,
		private router : Router
		) { }

	getProducts(){
		this.productService.getProductsList().subscribe(
			data => {
				this.products = data ;
				this.emitProduct();
			},
			error => {
				console.log(error)
			}
		);;
	}
	UpdateProduct( product: Product ) {
		const url = `${apiURLProducts}/${product.id }`; 
		
			this.httpClient.put(url, product)

    }

	emitProduct(){
		this.productsubject.next(this.products); 
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
