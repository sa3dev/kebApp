import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { apiURLProducts } from "../../config";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  /**
   * Function to get the list of products that returns an Observable of Product[]
   */
  getProductsList() {
    return this.http.get<Product[]>(apiURLProducts)
  }

  /**
   * Function to delete a product selected by its id
   * @param id 
   */
  deleteProduct(id) {
    this.http.delete(apiURLProducts + id).subscribe(data => console.log(data), error => console.log("Error in delete product method " + error)
    )
  }
  /**
   * Function to update the property of a value from a certain product (selected by its id)
   * @param id id of the product
   * @param property product's property that you wish to modify
   * @param value new value for the property defined in the second argument
   * 
   */
  updateProduct(id: number, property, value) {

    this.http.patch(apiURLProducts + id, {
      property: value,
    }).subscribe(data => console.log(data), error => console.log("Error in the updateProduct method " + error))
  }
}
