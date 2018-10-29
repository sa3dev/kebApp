import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurcomponentComponent } from './fournisseurcomponent/fournisseurcomponent.component';
import { FournisseurdetailsComponent } from './fournisseurdetails/fournisseurdetails.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
     FormsModule
  ],
  declarations: [FournisseurcomponentComponent, FournisseurdetailsComponent],
  

})
export class FournisseurModule {}
