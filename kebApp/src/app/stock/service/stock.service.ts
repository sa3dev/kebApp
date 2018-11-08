import { Injectable } from '@angular/core';
import { ProductsService } from '../../core/products/products.service';
import { Product } from 'src/app/core/products/product.model';
import { HttpClient } from '@angular/common/http';
import { apiURLProducts, apiURLFournisseur } from '../../config';

import { Subject, Observable } from 'rxjs';
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

	/**
	 * Get a list of products from the server
	 */
	getProducts(){
		this.productService.getProductsList().subscribe(
			data => {
				this.products = data ;
				this.emitProduct();
			},
			error => {
				console.log(error)
			}
		);
	}

	/**
	 * Update a product 
	 * 
	 * @param product 
	 */
	UpdateProduct( product: Product ) {
		const url = `${apiURLProducts}${product.id }`; 
		console.log(url)
		return this.httpClient.put( url, product );
	}
	
	/**
	 * Permet d'asynchroniser la liste des produit 
	 */
	emitProduct(){
		this.productsubject.next(this.products); 
	}

	/**
	 * Add a product in the server 
	 * 
	 * @param product 
	 */
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

		/**
		 * Get the fournisseur's list 
		 * 
		 */
		getNameFournisseur(){
			return this.httpClient.get(apiURLFournisseur);
		}
}
