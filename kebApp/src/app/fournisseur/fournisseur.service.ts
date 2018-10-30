import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from './fournisseur.model';
import { apiURLFournisseur } from '../../app/config';
import { Observable,of } from 'rxjs';
import {map} from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private httpClient:HttpClient) { }

  getFournisseur():Observable<Fournisseur[]>{
    return this.httpClient.get<Fournisseur[]>(apiURLFournisseur);
  }
  deleteFournisseur(id:string){
    //const url = `${apiURLFournisseur}/${id}`
   let url=apiURLFournisseur+"/"+id;
   console.log(url);
    return this.httpClient.delete(url);
  }

  researchFournisseur(value:string):Observable<Fournisseur[]>{
    return this.getFournisseur().pipe<Fournisseur[]>(
      map(
        (fournisseurs: Fournisseur[])=>{
          return fournisseurs.filter((fournisseur:Fournisseur)=>{
            if(fournisseur.nom==value|| fournisseur.adresse===value || fournisseur.cp==value || fournisseur.telephone===value || fournisseur.ville===value ){
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

  addFournisseur(fournisseur:Fournisseur){
    return this.httpClient.post(apiURLFournisseur,fournisseur)
      
  }
  putFournisseur(fournisseur: Fournisseur) {
    let url=apiURLFournisseur+"/"+fournisseur.id;
    return this.httpClient.put(url,fournisseur);
      
  }
}
