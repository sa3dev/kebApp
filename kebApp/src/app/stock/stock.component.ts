import { Component, OnInit } from '@angular/core';
import { Product } from '../core/products/product.model';
import { ProductsService } from '../core/products/products.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StockService } from './service/stock.service';


@Component({
	selector: 'app-stock',
	templateUrl: './stock.component.html',
	styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

	listProduct: Product[];
	productSubsciption: Subscription;

	previsionel : number ;
	show : boolean;
	showAdd :boolean;
	showupdate :boolean;
	
	// Form ajout 
	loginForm: FormGroup;
	name: FormControl;
	price: FormControl;
	quantity: FormControl;
	supplier: FormControl;
	quantityPrev : FormControl;
	
	// Form edit
	loginFormMod: FormGroup;
	nameMod: FormControl;
	priceMod: FormControl;
	quantityMod: FormControl;
	supplierMod: FormControl;
	quantityPrevMod : FormControl;

	pageDetail : boolean = false;
	productDetail: Product;
	productEdit : Product;

	listFournisseur: any ; // type fournisseur a voir si on importe le model ou pas ( clean architecture ?)

	varModifProvisionel = false;

	constructor(
		private router : Router,
		private ProductService : ProductsService,
		private fb : FormBuilder,
		private stockservice:StockService
		) { }

	ngOnInit() {
		this.chargeListProduct();
		this.stockservice.getProducts();
		this.show = true;

		this.name = this.fb.control('' , [ Validators.required, Validators.minLength(2) ]);
		this.price = this.fb.control('', [Validators.required]);
		this.quantity = this.fb.control('', [Validators.required,]);
		this.supplier = this.fb.control('', [Validators.required,Validators.minLength(2)]);
		this.quantityPrev = this.fb.control('' , [Validators.required]);

		this.loginForm = this.fb.group({
			name:  this.name,
			price: this.price,
			quantity: this.quantity, 
			supplier: this.supplier,
			quantityPrev: this.quantityPrev
		});

		this.nameMod = this.fb.control('' , [ Validators.required, Validators.minLength(2) ]);
		this.priceMod = this.fb.control('', [Validators.required]);
		this.quantityMod = this.fb.control('', [Validators.required,]);
		this.supplierMod = this.fb.control('', [Validators.required,Validators.minLength(2)]);
		this.quantityPrevMod = this.fb.control('' , [Validators.required]);

		

		this.loginFormMod = this.fb.group({
			nameMod:  		  this.nameMod,
			priceMod: 		  this.priceMod,
			quantityMod: 	  this.quantityMod, 
			supplierMod: 	  this.supplierMod,
			quantityPrevMod: this.quantityPrevMod
		});
	}
	/**
	 * Charger le bon produit dans le formulaire pour editer
	 * 
	 * @param product update a product
	 *  
	 */
	editProd( i:number  ){
		this.onShowUpdate();
		this.productEdit = this.listProduct[i];
		this.nameMod.setValue(this.productEdit.name);
		this.priceMod.setValue(this.productEdit.price);
		this.quantityMod.setValue(this.productEdit.quantity);
		this.supplierMod.setValue(this.productEdit.supplier);
		this.quantityPrevMod.setValue(this.productEdit.quantityPrev);
	}
	/**
	 * Update the product
	 */
	editProduct(){	
		let prod = new Product();
		prod.id=this.productEdit.id;
		prod.IDsupplier=null;
		prod.name = this.nameMod.value;
		prod.price =  this.priceMod.value ;
		prod.quantity = this.quantityMod.value;
		prod.quantityPrev = this.quantityPrevMod.value;
		prod.supplier  = this.supplierMod.value;		
		this.stockservice.UpdateProduct( prod ).subscribe(
			data => {
				console.log(data);
				this.stockservice.getProducts();
				this.onShow();

			}
		);
	}
	/**
	 * 
	 * @param id Delete a product from produst list
	 */
	deleteProduct( id: number ){
		this.ProductService.deleteProduct(id);
		//this.stockservice.getProducts()
	}
	/**
	 * Envoi un produit selectionné au composant enfant 
	 * et passe a true le template detaile d'un produit
	 * 
	 * @param i 
	 */
	detail( i : number ){
		if( this.pageDetail ){
			this.pageDetail = false;
		}else if( this.pageDetail === false ){
				this.pageDetail = true;
		}
		this.productDetail = this.listProduct[i];		
	}
	/**
	 * show the template add forms product
	 */
	onShowAdd(){
		this.chargeNameFournisseur();
		this.showAdd = true;
		this.show = false;
		this.showupdate = false;
	}
	/**
	 * show the template of update forms
	 */
	onShowUpdate(){
		this.showAdd = false;
		this.show = false;
		this.showupdate = true;
	}
	/**
	 *	show template of list of products
	 */
	onShow(){
		this.showAdd = false;
		this.show = true;
		this.showupdate = false;
	}

	/**
	 * Add a product when the forms is completed
	 */
	signup(){
		if( this.name.value && this.price.value && this.quantity && this.name ){			
			let prod = new Product();
			prod.name = this.name.value;
			prod.price = this.price.value;
			prod.quantity = this.quantity.value;
			prod.supplier = this.supplier.value;
			prod.quantityPrev = this.quantityPrev.value;
			this.ProductService.addProduct( prod );
			this.show = true;
			this.showAdd = false;
			this.loginForm.reset();
		}else{
			console.log("Error dans l'ajout");
		}
	}

	/**
	 * the unsunscriber method 
	 */
	ngOnDestroy(){
		this.productSubsciption.unsubscribe();
	}

	modifProvisionel(){
		if( this.varModifProvisionel ){
			this.varModifProvisionel = false;
		}else 
			if( this.varModifProvisionel = false){
				this.varModifProvisionel = true;
		}
	}

	chargeNameFournisseur(){
		this.stockservice.getNameFournisseur().subscribe( 
			data => this.listFournisseur = data
		 );
	}

	chargeListProduct(){
		this.productSubsciption = this.stockservice.productsubject.subscribe(
			( products : Product[] ) => {
				this.listProduct = products
			}
		);
	}
}
