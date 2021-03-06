import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { apiURLProducts } from "../../config";
import { Router } from '@angular/router';
import { Subject } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	products: Product[];
	newproperty: string;
	productsubject = new Subject<Product[]>(); // notre subject 


	constructor(private http: HttpClient, private router: Router) { }
	/**
	 * Function to get the list of products that returns an Observable of Product[]
	 */
	getProductsList() {
		return this.http.get<Product[]>(apiURLProducts)
	}

	emitProduct() {
		this.productsubject.next(this.products);
	}

	/**
	 * Function to delete a product selected by its id
	 * @param id 
	 */
	deleteProduct(id) {
		return this.http.delete(apiURLProducts + id);
	}
	/**
	 * Function to update the property of a value from a certain product (selected by its id)
	 * @param id id of the product
	 * @param property product's property that you wish to modify
	 * @param value new value for the property defined in the second argument
	 * 
	 */
	updateProduct(id: number, property: string, value) {
		this.newproperty = property
		return this.http.patch(apiURLProducts + id, {
			newproperty: value,
		}).subscribe(
			data => { console.log(data); this.getProductsList(); },
			error => console.log("Error in the updateProduct method " + error))

	}

	/**
	 * A function to add a product to our list of products
	 * @param product the product of type Product that you want to add to the list of products
	 */
	addProduct(product: Product) {
		return this.http.post(apiURLProducts, product);
	} 

	/**
	 * Update the whole product (different then updateProduct(id,property,value))
	 * @param product the whole Product object to put
	 */
	UpdateProduct(product: Product) {
		const url = `${apiURLProducts}/${product.id}`;
		this.http.put(apiURLProducts, product)
	}
}
