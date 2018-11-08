import { TestBed  , inject } from '@angular/core/testing';

import { StockService } from './stock.service';
import { Product } from 'src/app/core/products/product.model';

describe('StockService', () => {
	let MockDataService: StockService;


	beforeEach(() => {

		let mockTestService = {
			products : [
				{
					"id": 20,
					"IDsupplier": 2,
					"name": "Framboise",
					"price": 52,
					"quantity": 53,
					"quantityPrev": "150",
					"supplier": "said&coWOuah"
				}
			],

			getProducts() { return [  ]},

			UpdateProduct() { } ,
			

		}

	TestBed.configureTestingModule({

	});


	it('should be created', () => {
		const service: StockService = TestBed.get(StockService);
		expect(service).toBeTruthy();
	});

})});
