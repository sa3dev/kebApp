import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule} from './routing/routing.module';
import { FournisseurcomponentComponent } from './fournisseurcomponent/fournisseurcomponent.component';
import { FournisseurdetailsComponent } from './fournisseurdetails/fournisseurdetails.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutfournisseurComponent } from './routfournisseur/routfournisseur.component';
import { FournisseurService} from '../fournisseur/fournisseur.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RoutingModule

  ],
  providers:[FournisseurService],
  declarations: [FournisseurcomponentComponent, FournisseurdetailsComponent, RoutfournisseurComponent],
  exports:[RouterModule,FormsModule, FournisseurcomponentComponent, FournisseurdetailsComponent,RoutfournisseurComponent],

})
export class FournisseurModule {}
