import { Component, OnInit } from '@angular/core';
import{FournisseurService} from '../fournisseur.service';
import { Fournisseur } from '../fournisseur.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-fournisseurcomponent',
  templateUrl: './fournisseurcomponent.component.html',
  styleUrls: ['./fournisseurcomponent.component.scss']
})
/**
 * Class Fournissseur Component
 * @author Léon Demeyere
 */
export class FournisseurcomponentComponent implements OnInit {
  private listFournisseur:Fournisseur[]=[];
  //form research
  private formFournisseur:FormGroup;
  private research: FormControl;
  // form research
  private formAjout:FormGroup;
  private ctrlName:FormControl;
  private ctrlAdresse: FormControl;
  private ctrlVille: FormControl;
  private ctrlCp: FormControl;
  private ctrlTelephone:FormControl;
  //boolean ngIf
  private pageAjout:boolean;
  private listEdit:Boolean[]=[];
  private pageDetail:boolean;
  
  //fournisseur renvoyer au details component
  private fournisseurDetail:Fournisseur;


  /**
   * initialisation des boolean et injection
   * @param service 
   * @param fb 
   */
  constructor(private service:FournisseurService, private fb: FormBuilder) { 
    this.pageAjout=false;
    this.pageDetail=false;
  }

  
  ngOnInit() {
    this.getFournisseurs();//initialise les fournisseurs
    this.research = this.fb.control('', Validators.required);//research init
    this.formFournisseur = this.fb.group({
      research: this.research,
    });

    this.ctrlName=this.fb.control('',Validators.required);//ajout init
    this.ctrlAdresse=this.fb.control('',Validators.required);
    this.ctrlVille=this.fb.control('',Validators.required);
    this.ctrlCp=this.fb.control('',Validators.required);
    this.ctrlTelephone=this.fb.control('',Validators.required);
    this.formAjout = this.fb.group({
      ctrlName:this.ctrlName,
      ctrlAdresse:this.ctrlAdresse,
      ctrlVille:this.ctrlVille,
      ctrlCp:this.ctrlCp,
      ctrlTelephone:this.ctrlTelephone
    });
    //init tab Edit
    for(let i=0; i<this.listFournisseur.length; i++){
      this.listEdit[i]=false;
    }
  }

  /**
   * permet d'afficher detail fournisseur componenent
   * @param i 
   */
  pageDetails(i:number){
    console.log("test");
    if(this.pageDetail){
      this.pageDetail=false;
    }else{
      this.pageDetail=true;
    }
    if(i>=0){
      this.fournisseurDetail=this.listFournisseur[i];
    }
    
  }
  
  /**
   * Action button Edit permet de remplir le tableau listEdit d''un boolean à l'élément i
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
   * Update fournisseur
   * @param i 
   */
  editFournisseur(i:number){
   
    //console.log(this.ctrlEditAdresse.value);
   
    this.service.putFournisseur(this.listFournisseur[i]).subscribe(
      (data)=>{
        
        this.listEdit[i]=false;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  /**
   * refresh listFournisseur
   */
  refresh(){
    this.getFournisseurs();
    this.research.reset();
  }
  /**
   * affiche le formulaire ajout
   */
  ajout(){
    
    if(this.pageAjout){
      this.pageAjout=false;
    }else{
      this.pageAjout=true;
    }
    
  }
  /**
   * add fournisseur
   */
  ajouter(){
    console.log("coucou");
    let fournisseur:Fournisseur=new Fournisseur();
    fournisseur.nom=this.ctrlName.value;
    fournisseur.telephone=this.ctrlTelephone.value;
    fournisseur.ville=this.ctrlVille.value;
    fournisseur.adresse=this.ctrlAdresse.value;
    fournisseur.cp=this.ctrlCp.value;
    this.service.addFournisseur(fournisseur).subscribe(
      (data)=>{
        this.getFournisseurs();
        this.pageAjout=false;
      },
      (error)=>{
        console.log(error);
      }
    );
    

  }
  /**
   * research fournisseur
   */
  researchZ(){
    if(this.research.value===""){
      this.getFournisseurs();
    }else{
      console.log("researchZ() : "+ this.research.value);
    this.service.researchFournisseur(this.research.value).subscribe(
      (data:Fournisseur[])=>{
        console.log("ici");
        console.log("ici: "+ data);
        this.listFournisseur=data;
      },
      (error)=>{
        console.log(error);
      }
    );
    console.log(this.research.value);
    }
    
  }
  /**
   * charge fournisseur sur la page
   */
  getFournisseurs(){
    this.service.getFournisseur().subscribe(
      (data)=>{
        this.listFournisseur=data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  /**
   * delete fournisseur
   * @param id 
   */
  delete(id:string){
    this.service.deleteFournisseur(id).subscribe((data)=>{
      console.log("Adieux");
      this.getFournisseurs();
    },
    (error)=>{
      console.log(error);
    })
  }

}
