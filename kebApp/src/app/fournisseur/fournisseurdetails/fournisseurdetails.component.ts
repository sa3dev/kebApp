import { Component, OnInit, Input } from '@angular/core';
import { Fournisseur } from '../fournisseur.model';
import { FournisseurcomponentComponent } from '../fournisseurcomponent/fournisseurcomponent.component';
import { Product } from 'src/app/core/products/product.model';
import { FournisseurService } from '../fournisseur.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-fournisseurdetails',
  templateUrl: './fournisseurdetails.component.html',
  styleUrls: ['./fournisseurdetails.component.scss']
})
/**
 * @author Léon Demeyere
 * class composant details qui gère les produits
 */
export class FournisseurdetailsComponent implements OnInit {
  private listProducts:Product[]=[];//liste des produit afficher 
  private formAjout:FormGroup;// Attribut du formulaire d'ajout
  private ctrlName: FormControl;
  private ctrlPrice:FormControl;
  private pageAjout:boolean;//boolean affichage de page ajout
  private listEdit:boolean[]=[];//tableau boolean permettant l'affichage des edit

  @Input() fournisseur: Fournisseur;//Récupération des fournisseurs
  /**
   * injection de plusieur élément dont component Fournisseur
   * @param compFour 
   * @param service 
   * @param fb 
   */
  constructor(private compFour:FournisseurcomponentComponent, private service:FournisseurService, private fb: FormBuilder) { 
    this.pageAjout=false;
  }


  ngOnInit() {
    this.getListProduct();
    this.ctrlName=this.fb.control('',Validators.required);//ajout init
    this.ctrlPrice=this.fb.control('',Validators.required);
    
    this.formAjout = this.fb.group({
      ctrlName:this.ctrlName,
      ctrlPrice:this.ctrlPrice,
      
    });
    for(let i; i>this.listProducts.length; i++){//init listEdit
      this.listEdit[i]=false;
    }
    
    
  }
  retour(){//return to fournisseur component
    this.compFour.pageDetails(-1);
    
  }

  /**
   * Button edit
   * @param i 
   */
  edit(i:number){
    if(this.listEdit[i]){
      this.getListProduct();
      this.listEdit[i]=false;
    }else{
      this.listEdit[i]=true;
    }
  }

  /**
   * Valid editProduct
   * @param i 
   */
  editProduct(i:number){
   
    //console.log(this.ctrlEditAdresse.value);
   
    this.service.putProduct(this.listProducts[i]).subscribe(
      (data)=>{
        
        this.listEdit[i]=false;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  /**
   * Renvoie la liste des produit en fonction des id fournisseur
   */
  getListProduct(){
    this.service.getProducts(this.fournisseur.id).subscribe(
      (data)=>{
        console.log("reussi");
        this.listProducts=data;
        
      },
      (error)=>{
        console.log(error);
      }
    );
  }

/**
 * delete un produit
 * @param id 
 */
  delete(id:number){
    this.service.deleteProduct(id).subscribe(
      (data)=>{
        this.getListProduct();
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  /**
   * affiche page d'ajout
   */
  pageAjouts(){
    if(this.pageAjout){
      this.pageAjout=false;
    }else{
      this.pageAjout=true;
    }
  }

  /**
   * Ajoute un produit au fournisseur
   */
  ajouter(){
    console.log("ajout");
    let product:Product=new Product();
    product.name=this.ctrlName.value;
    product.price=this.ctrlPrice.value;
    product.quantity=0;
    product.quantityPrev=0;
    product.IDsupplier=this.fournisseur.id;
    
    this.service.addProduct(product).subscribe(
      (data)=>{
        this.getListProduct();
        this.pageAjout=false;
      },
      (error)=>{
        console.log(error);
      }
    );
    

  }
}
