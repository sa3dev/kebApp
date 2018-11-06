import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from './fournisseur.model';
import { apiURLFournisseur, apiURLProducts } from '../../app/config';
import { Observable,of } from 'rxjs';
import {map} from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';
import { Product } from '../core/products/product.model';

@Injectable({
  providedIn: 'root'
})
/** @author Léon Demeyere
 * fournisseur Service
 */
export class FournisseurService {

  /**
   * 
   * @param httpClient 
   */
  constructor(private httpClient:HttpClient) { }

  /**
   * getFournisseur
   */
  getFournisseur():Observable<Fournisseur[]>{
    return this.httpClient.get<Fournisseur[]>(apiURLFournisseur);
  }
  /**
   * delete fournisseur 
   * @param id 
   */
  deleteFournisseur(id:string){
    //const url = `${apiURLFournisseur}/${id}`
   let url=apiURLFournisseur+"/"+id;
   console.log(url);
    return this.httpClient.delete(url);
  }

  /**
   * Recherche un fournisseur en fonction de tout ces attribut sauf sont id
   * @param value 
   */
  researchFournisseur(value:string):Observable<Fournisseur[]>{
    value=value.toLowerCase();
 
    return this.getFournisseur().pipe<Fournisseur[]>(
      map(
        (fournisseurs: Fournisseur[])=>{
          return fournisseurs.filter((fournisseur:Fournisseur)=>{
            
            if(fournisseur.nom.toLowerCase().includes(value)|| fournisseur.adresse.toLowerCase().includes(value) || fournisseur.cp.toString().includes(value) || fournisseur.telephone===value || fournisseur.ville.toLowerCase().includes(value) ){
              console.log("nom"+fournisseur.nom)
              return true;
            }else{
              return false;
            }
          })
          }
      )

    );

  }

  /**
   * get Products whith idFournisseur
   * @param id 
   */
  getProducts(id:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(apiURLProducts+"?IDsupplier="+id);
  }
  /**
   * add fournisseur
   * @param fournisseur 
   */
  addFournisseur(fournisseur:Fournisseur){
    return this.httpClient.post(apiURLFournisseur,fournisseur)
      
  }
  /**
   *  put fournisseur
   * @param fournisseur 
   */
  putFournisseur(fournisseur: Fournisseur) {
    let url=apiURLFournisseur+"/"+fournisseur.id;
    return this.httpClient.put(url,fournisseur);
      
  }
  /**
   *  delete product
   * @param id 
   */
  deleteProduct(id:number){
    //const url = `${apiURLFournisseur}/${id}`
   let url=apiURLProducts+"/"+id;
   console.log(url);
    return this.httpClient.delete(url);
  }
  /**
   *  add product
   * @param product 
   */
  addProduct(product:Product){
    return this.httpClient.post(apiURLProducts, product);
  }

  /**
   * update product
   * @param product 
   */
  putProduct(product: Product) {
    let url=apiURLProducts+"/"+product.id;
    return this.httpClient.put(url,product);
      
  }
}
