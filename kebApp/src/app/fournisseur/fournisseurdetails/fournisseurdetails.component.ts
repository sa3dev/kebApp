import { Component, OnInit, Input } from '@angular/core';
import { Fournisseur } from '../fournisseur.model';
//import { FournisseurcomponentComponent } from '../fournisseurcomponent/fournisseurcomponent.component';
import { Product } from 'src/app/core/products/product.model';
import { FournisseurService } from '../fournisseur.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { Observable } from 'rxjs';


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
  private id:number;
  private fournisseur:Fournisseur;
  private listProducts:Observable<Product[]>;//liste des produit afficher 
  private formAjout:FormGroup;// Attribut du formulaire d'ajout
  private ctrlName: FormControl;
  private ctrlPrice:FormControl;
  private pageAjout:boolean;//boolean affichage de page ajout
  private listEdit:boolean[]=[];//tableau boolean permettant l'affichage des edit
 
  /**
   * injection de plusieur élément dont component Fournisseur
   * @param compFour 
   * @param service 
   * @param fb 
   */
  constructor(/*private compFour:FournisseurcomponentComponent,*/ private service:FournisseurService, private fb: FormBuilder , private route:ActivatedRoute, private router: Router) { 
    
    this.fournisseur=new Fournisseur();
    this.pageAjout=false;//init a false la vue page ajout
    this.listProducts=new Observable<Product[]>();
    this.id=this.route.snapshot.params['id'];//récupère dans l'url l'id du fournisseur
    console.log("id"+this.id);
    if(this.service.getFournisseur().value.length===0){//si le behavursubject est vide lance une requète
      console.log("refraiche");
      this.service.getFournisseurId(this.id).subscribe(
        (data)=>{
          this.fournisseur=data;
        },
        (error)=>console.log(error)
      );
    }else{//sinon récupération du fournisseur appartir du behavurSubject
      console.log("ici");
      this.fournisseur=this.service.getFournisseur().value[this.id];
    }
    
  }


  ngOnInit() {
    this.service.getHttpProducts(this.id);//requète http pour list des produit
    this.getListProduct();//initialise la liste produit
    this.ctrlName=this.fb.control('',Validators.required);//ajout init
    this.ctrlPrice=this.fb.control('',Validators.required);
    
    this.formAjout = this.fb.group({
      ctrlName:this.ctrlName,
      ctrlPrice:this.ctrlPrice,
      
    });
    for(let i; i>this.service.getListProduct().value.length; i++){//init listEdit
      this.listEdit[i]=false;
    }
    
    
  }
 

  back(){//retour en arriere 
    this.router.navigate(['fournisseurs'])
  }
  /**
   * Button edit
   * @param i 
   */
  edit(i:number){
    if(this.listEdit[i]){
      
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

    this.service.putProduct(i);
    this.edit(i);
  }

  /**
   * Renvoie la liste des produit en fonction des id fournisseur
   */
  getListProduct(){
    this.listProducts=this.service.getListProduct();
  }

/**
 * delete un produit
 * @param id 
 */
  delete(id:number){
    this.service.deleteProduct(id);
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
    
    
    let product:Product=new Product();
    product.name=this.ctrlName.value;
    product.price=this.ctrlPrice.value;
    product.quantity=0;
    product.quantityPrev=0;
    product.IDsupplier=this.fournisseur.id;
    
    this.service.addProduct(product);
    this.pageAjouts();

  }
}
