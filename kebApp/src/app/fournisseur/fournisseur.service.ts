import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from './fournisseur.model';
import { apiURLFournisseur, apiURLProducts } from '../../app/config';
import { Observable,of, BehaviorSubject } from 'rxjs';
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
  private listFournisseur = new BehaviorSubject<Fournisseur[]>([]);
  private listProduct = new BehaviorSubject<Product[]>([]);
  /**
   * 
   * @param httpClient 
   */
  constructor(private httpClient:HttpClient) { 
    this.getHttpFournisseur();
  }

  /**
   * getFournisseur
   */
  getHttpFournisseur(){
    this.httpClient.get<Fournisseur[]>(apiURLFournisseur).subscribe(
      (data)=>{
        
        this.listFournisseur.next(data);
        
        console.log(this.listFournisseur.value.length);
      },
      (error)=>console.log(error)
    );
  }
  getFournisseur():BehaviorSubject<Fournisseur[]>{
    return this.listFournisseur;
  }
  getFournisseurId(i:number):Observable<Fournisseur>{
    return this.httpClient.get<Fournisseur>(apiURLFournisseur+"/"+i);
    
    
  }
  /**
   * delete fournisseur 
   * @param id 
   */
  deleteFournisseur(id:string){
    //const url = `${apiURLFournisseur}/${id}`
    this.listFournisseur.next(this.getFournisseur().value.filter((fournisseur:Fournisseur)=>{
      if(fournisseur.id.toString()==id){
        return false;
      }else{
        return true;
      }
    }));
   let url=apiURLFournisseur+"/"+id;
   console.log(url);
    this.httpClient.delete(url).subscribe(
      (data)=>{
        
        console.log(data);
      },
      (error)=>console.log(error)
    );
    
    /*this.getFournisseur().pipe(
      map(
      (fournisseurs:Fournisseur[])=>{
        return fournisseurs.filter(
          (fournisseur:Fournisseur)=>{
            if(fournisseur.id.toString()===id){
              console.log("false");
              return false;
            }else{
              console.log("true");
              return true;
            }
          })
          
      }
        )
        );*/ 
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
            
            if(fournisseur.nom.toLowerCase().includes(value)|| fournisseur.adresse.toLowerCase().includes(value) || fournisseur.cp.toString().includes(value) || fournisseur.telephone.toString().includes(value) || fournisseur.ville.toLowerCase().includes(value )){
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
  getHttpProducts(id:number){
   this.httpClient.get<Product[]>(apiURLProducts+"?IDsupplier="+id).subscribe(
     (data)=>{
       this.listProduct.next(data);
     },
     (error)=>{
       console.log(error);
     }
   );
  }
  getListProduct(){
    return this.listProduct;
  }
  /**
   * add fournisseur
   * @param fournisseur 
   */
  addFournisseur(fournisseur:Fournisseur){
    
    
    this.httpClient.post(apiURLFournisseur,fournisseur).subscribe(
      (data)=>{
        let listFournisseur:Fournisseur[]=this.listFournisseur.value;
        listFournisseur.push(data as Fournisseur);
        
        
      },
      (error)=>{
        console.log(error);
        
      }
    ); 
      
  }
  /**
   *  put fournisseur
   * @param fournisseur 
   */
  putFournisseur(i:number) {
    let fournisseur:Fournisseur=this.listFournisseur.value[i];
    let url=apiURLFournisseur+"/"+fournisseur.id.toString();
    
     this.httpClient.put(url,this.listFournisseur.value[i]).subscribe(
      (data)=>{
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
      }
    );
      
  }
  /**
   *  delete product
   * @param id 
   */
  deleteProduct(id:number){
    //const url = `${apiURLFournisseur}/${id}`
   let url=apiURLProducts+"/"+id;
   this.listProduct.next(this.listProduct.value.filter(
     (product:Product)=>{
       if(id!==product.id){
         return true;
       }else{
         return false;
       }
     }
   ))
    this.httpClient.delete(url).subscribe(
      (error)=>{
        console.log(error);
      }
    );
  }
  /**
   *  add product
   * @param product 
   */
  addProduct(product:Product){
    this.httpClient.post(apiURLProducts, product).subscribe(
      (data)=>{
        let listProd:Product[] =this.listProduct.value
        listProd.push(data as Product);
      },
      (error)=>console.log(error)
    );
  }

  /**
   * update product
   * @param product 
   */
  putProduct(i:number) {
    let product:Product=this.listProduct.value[i];
    let url=apiURLProducts+"/"+product.id;
   this.httpClient.put(url,product).subscribe();  
  }
}
