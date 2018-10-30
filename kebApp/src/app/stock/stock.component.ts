import { Component, OnInit } from '@angular/core';
import { Product } from '../core/products/product.model';
import { ProductsService } from '../core/products/products.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
	selector: 'app-stock',
	templateUrl: './stock.component.html',
	styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

	listProduct: Product[];
	productSubsciption: Subscription;

	previsionel : number = 50;
	show : boolean;
	showAdd :boolean;
	showupdate :boolean;
	
	name: FormControl;
	price: FormControl;
	quantity: FormControl;
	supplier: FormControl;


	loginForm: FormGroup;
	

	constructor(
		private router : Router,
		private ProductService : ProductsService,
		private fb : FormBuilder
		) { }

	ngOnInit() {

		this.productSubsciption = this.ProductService.productsubject.subscribe(
			( products : Product[] ) => {
				this.listProduct = products
			}
		);

		this.ProductService.getProductsList();
		this.show = true;

		this.name = this.fb.control('' , [ Validators.required, Validators.minLength(2) ]);
		this.price = this.fb.control('', [Validators.required]);
		this.quantity = this.fb.control('', [Validators.required,]);
		this.supplier = this.fb.control('', [Validators.required,Validators.minLength(2)]);
	

		this.loginForm = this.fb.group({
			name:  this.name,
			price: this.price,
			quantity: this.quantity, 
			supplier: this.supplier
		});
		
	}

	editProd( product: Product ){
		//this.ProductService.UpdateProduct( product );
		//this.router.navigate(['']);
	}
	/**
	 * 
	 * @param id Delete a product from produst list
	 */
	deleteProduct( id: number ){
		this.ProductService.deleteProduct(id);
	}

	detail(){
		console.log('page detail');
		//this.router.navigate([''])
	}

	onShowAdd(){
		this.showAdd = true;
		this.show = false;
		this.showupdate = false;
	}

	onShowUpdate(){
		this.showAdd = false;
		this.show = false;
		this.showupdate = true;
	}

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
			this.ProductService.addProduct( prod );

			this.show = true;
			this.showAdd = false;
			
			this.loginForm.reset();


		}else{
			console.log('Error dans l ajout');
		}
	}

	ngOnDestroy(){
		this.productSubsciption.unsubscribe();
	}


}
