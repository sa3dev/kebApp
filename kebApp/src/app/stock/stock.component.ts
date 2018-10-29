import { Component, OnInit } from '@angular/core';
import { StockService } from './service/stock.service'; 
import { Product } from '../core/products/product.model';
import { ProductsService } from '../core/products/products.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
	selector: 'app-stock',
	templateUrl: './stock.component.html',
	styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

	listProduct: Product[];
	previsionel : number = 50;
	show : boolean;
	showAdd :boolean;
	showupdate :boolean;
	
	name: FormControl;
	price: FormControl;
	quantity: FormControl;
	supplier: FormControl;


	private loginForm: FormGroup;
	

	constructor(
		private router : Router,
		private ProductService : ProductsService,
		private fb : FormBuilder
		) { }

	ngOnInit() {

		this.getProducts();

		this.name = this.fb.control('' , [ Validators.required, Validators.minLength(2) ]);
		this.price = this.fb.control('', [Validators.required]);
		this.quantity = this.fb.control('', [Validators.required,]);
		this.supplier = this.fb.control('', [Validators.required,Validators.minLength(2)]);

		/*
			new FormControl('',  [ Validators.required, Validators.minLength(2) ])
			new FormControl('',  [Validators.required])
			 new FormControl('',  [Validators.required])
			 new FormControl('',  [Validators.required,Validators.minLength(2)])
		*/

		this.loginForm = this.fb.group({
			name:  this.name ,
			price: this.price   ,
			quantity: this.quantity , 
			supplier: this.supplier
		});
	}

	//get f() { return this.loginForm.controls; }

	getProducts(){
		this.ProductService.getProductsList().subscribe( data => this.listProduct = data );
		this.show = true;
	}

	editProd( id: number ){

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

	signup(  ){
		// const product = new Product();
		// product.name = this.fb.control.name.values;
		// product.price = this.fb.control.price;
		// product.quantity = this.fb.control.quantity;
		// product.supplier = this.fb.control.supplier;
		console.log( this.name );
		
	}

}
