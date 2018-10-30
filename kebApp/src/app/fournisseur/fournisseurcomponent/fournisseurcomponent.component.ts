import { Component, OnInit } from '@angular/core';
import{FournisseurService} from '../fournisseur.service';
import { Fournisseur } from '../fournisseur.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-fournisseurcomponent',
  templateUrl: './fournisseurcomponent.component.html',
  styleUrls: ['./fournisseurcomponent.component.scss']
})
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
  //Edit form
  /*private fomEdit: FormGroup;
  private ctrlEditName: FormControl;
  private ctrlEditAdresse:FormControl;
  private ctrlEditVille:FormControl;
  private ctrlEditCp: FormControl;
  private ctrlEditTel:FormControl;*/



  constructor(private service:FournisseurService, private fb: FormBuilder) { 
    this.pageAjout=false;
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
    /*this.ctrlEditName=this.fb.control('',Validators.required);
    this.ctrlEditAdresse=this.fb.control('',Validators.required);
    this.ctrlEditVille=this.fb.control('',Validators.required);
    this.ctrlEditCp=this.fb.control('',Validators.required);
    this.ctrlEditTel=this.fb.control('',Validators.required);
    
    this.fomEdit=this.fb.group({
      ctrlEditName : this.ctrlEditName,
      ctrlEditAdresse:this.ctrlEditAdresse,
      ctrlEditCp:this.ctrlEditCp,
      ctrlEditVille:this.ctrlEditVille,
      ctrlEditTel:this.ctrlEditTel
    });*/
  }

  
  edit(i:number){
    
    if(this.listEdit[i]){
      this.getFournisseurs();
      this.listEdit[i]=false;
    }else{
      this.listEdit[i]=true;
    }
    /*if(this.editF){
      this.editNumber=-1;
      this.editF=false;
    }else{
      this.editNumber=i;
      this.editF=true;
    }*/
  }
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
  refresh(){
    this.getFournisseurs();
    this.research.reset();
  }
  ajout(){
    
    if(this.pageAjout){
      this.pageAjout=false;
    }else{
      this.pageAjout=true;
    }
    
  }
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
