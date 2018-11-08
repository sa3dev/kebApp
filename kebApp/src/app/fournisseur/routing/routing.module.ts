import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FournisseurcomponentComponent as componentFournisseur} from '../fournisseurcomponent/fournisseurcomponent.component';
import { RoutfournisseurComponent as routcomp}  from '../routfournisseur/routfournisseur.component';
import {FournisseurdetailsComponent} from '../fournisseurdetails/fournisseurdetails.component';
const routes: Routes = [
  
  { 
   path: '', 
   component:routcomp,
   
    children : [ 
     { path:'', component:componentFournisseur},
     {path:'detailsFournisseur/:id', component:FournisseurdetailsComponent}
    ]},
  
  
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RoutingModule { }
