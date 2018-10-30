import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/products/product.model';
import { StockComponent } from '../stock.component';

@Component({
	selector: 'app-detail-stock',
	templateUrl: './detail-stock.component.html',
	styleUrls: ['./detail-stock.component.scss']
})
export class DetailStockComponent implements OnInit {

	@Input() dataProduct: Product; // un seul produit recuperer du parent

	constructor( private compStock: StockComponent ) { }

	ngOnInit() {
	}

	retourStock(){
		this.compStock.pageDetail = false;
	}
}
