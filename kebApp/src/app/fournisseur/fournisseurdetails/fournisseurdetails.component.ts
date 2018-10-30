import { Component, OnInit, Input } from '@angular/core';
import { Fournisseur } from '../fournisseur.model';
import { FournisseurcomponentComponent } from '../fournisseurcomponent/fournisseurcomponent.component';

@Component({
  selector: 'app-fournisseurdetails',
  templateUrl: './fournisseurdetails.component.html',
  styleUrls: ['./fournisseurdetails.component.scss']
})
export class FournisseurdetailsComponent implements OnInit {

  @Input() fournisseur: Fournisseur;
  constructor(private compFour:FournisseurcomponentComponent) { }

  ngOnInit() {
    console.log(this.fournisseur.nom);
    
  }
  retour(){
    this.compFour.pageDetails(-1);
  }

}
