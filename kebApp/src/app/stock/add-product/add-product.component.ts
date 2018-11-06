import { Component, OnInit , Output, Input , OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { StockService } from './../service/stock.service';
import { ProductsService } from './../../core/products/products.service';

import { Product } from './../../core/products/product.model';
import { Fournisseur } from 'src/app/fournisseur/fournisseur.model';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { StockComponent } from '../stock.component';



@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
	// @Output() show = new EventEmitter();
	// @Output() showAdd = new EventEmitter();

	@Input() produit : Product=null;

	listFournisseur: any;

	loginForm:    FormGroup;
	name: 		  FormControl;
	price: 		  FormControl;
	quantity: 	  FormControl;
	supplier: 	  FormControl;
	quantityPrev: FormControl;

	constructor( 
		private fb: FormBuilder ,
		private ProducService: ProductsService,
		private stockService: StockService,
		private stock :StockComponent
		) { }

	ngOnInit() {
		this.listFournisseur = this.chargeNameFournisseur();
		if(this.produit == null)
		{
			this.name = this.fb.control('' , [Validators.required, Validators.minLength(2)]);
			this.price = this.fb.control('', [Validators.required]);
			this.quantity = this.fb.control('', [Validators.required,]);
			this.supplier = this.fb.control('', [Validators.required,Validators.minLength(2)]);
			this.quantityPrev = this.fb.control('' , [Validators.required]);
		}
		else
		{
			this.name = this.fb.control(this.produit.name , [Validators.required, Validators.minLength(2)]);
			this.price = this.fb.control(this.produit.price, [Validators.required]);
			this.quantity = this.fb.control(this.produit.quantity, [Validators.required,]);
			this.supplier = this.fb.control(this.produit.supplier, [Validators.required,Validators.minLength(2)]);
			this.quantityPrev = this.fb.control(this.produit.quantityPrev, [Validators.required]);
	
		}
		this.loginForm = this.fb.group({
			name:  this.name,
			price: this.price,
			quantity: this.quantity, 
			supplier: this.supplier,
			quantityPrev: this.quantityPrev
		});
	}
	
	ngOnChange(){
		console.log("changement")
	}

	/**
	 * Add a product when the forms is completed
	 */
	signup(){
		if(this.produit == null) {  this.add() } else {  this.edit(); }
	}
	/**
	 * Add a product
	 */
	add() {
		if( this.name.value && this.price.value && this.quantity && this.name ){			
			let prod = new Product();
			prod.name = this.name.value;
			prod.price = this.price.value;
			prod.quantity = this.quantity.value;
			prod.supplier = this.supplier.value;
			prod.quantityPrev = this.quantityPrev.value;

			this.ProducService.addProduct( prod ).subscribe(
				() => this.stockService.getProducts()
			);

			this.loginForm.reset();
			if(this.stock !== undefined)			
			{ 
				this.stock.onShow();
			}
		}else{
			console.log("Error dans l'ajout");
		}
	}

	/**
	* Update the product
	*/
	edit(){
		let prod = new Product();
		prod.id=this.produit.id;
		prod.IDsupplier=	null;
		prod.name = 		this.name.value;
		prod.price =  		this.price.value ;
		prod.quantity = 	this.quantity.value;
		prod.quantityPrev = this.quantityPrev.value;
		prod.supplier  = 	this.supplier.value;	
		this.stockService.UpdateProduct( prod ).subscribe(
			data => {
				console.log(data);
				this.stockService.getProducts();
				this.stock.onShow();

			}
		);
	}

	chargeNameFournisseur(){
		this.stockService.getNameFournisseur().subscribe( 
			data => { 
				this.listFournisseur = data ;
			}
		 );
	}

}
