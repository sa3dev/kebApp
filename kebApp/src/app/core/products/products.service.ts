import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { apiURLProducts } from "../../config";
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	products : Product[];
	newproperty:string;
	productsubject = new Subject<Product[]>(); // notre subject 

	constructor(private http: HttpClient , private router: Router) { }
	/**
	 * Function to get the list of products that returns an Observable of Product[]
	 */
	getProductsList() {
		return this.http.get<Product[]>(apiURLProducts).subscribe(
			data => {
				this.products = data ;
				this.emitProduct();
			},
			error => {
				console.log(error)
			}
		);
	}

	emitProduct(){
		this.productsubject.next(this.products); 
	}

	/**
	 * Function to delete a product selected by its id
	 * @param id 
	 */
	deleteProduct(id) {
		this.http.delete(apiURLProducts + id).subscribe(
			data => {console.log(data)
			this.getProductsList();
			},
			error => console.log("Error in delete product method " + error)
			)
	}
	/**
	 * Function to update the property of a value from a certain product (selected by its id)
	 * @param id id of the product
	 * @param property product's property that you wish to modify
	 * @param value new value for the property defined in the second argument
	 * 
	 */
	updateProduct(id: number, property:string, value) {
		this.newproperty = property
		this.http.patch(apiURLProducts + id, {
			newproperty: value,
		}).subscribe(
			data => console.log(data), 
			error => console.log("Error in the updateProduct method " + error))
	}

	/**
	 * A function to add a product to our list of products
	 * @param product the product of type Product that you want to add to the list of products
	 */
	addProduct(product:Product){
		this.http.post(apiURLProducts, product).subscribe(
			data => {
				console.log("POST Request is successful ", data);
				this.getProductsList();				
			},
			error => {
				console.log("Rrror", error);
			}
		); ;
	}
	
	UpdateProduct( product: Product ) {
		const url = `${apiURLProducts}/${product.id}`; 
			this.http.put(apiURLProducts, product)
				.subscribe(
					data => {
						console.log("PUT Request is successful ", data);
					},
					error => {
						console.log("Rrror", error);
					}
				);  
    }
}
