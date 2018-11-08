import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockComponent } from './stock.component';
import { DetailStockComponent } from './detail-stock/detail-stock.component';
import { StockService } from './service/stock.service';
import { AddProductComponent } from './add-product/add-product.component';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('StockComponent', () => {
  	let component: StockComponent;
  	let fixture: ComponentFixture<StockComponent>;
	let detailService: DetailStockComponent;


  	beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ StockComponent , DetailStockComponent , AddProductComponent , ],
		providers: [DetailStockComponent,  { provide : StockService }],
		imports:[ FormGroup , ReactiveFormsModule , FormsModule , ]
	})
    .compileComponents()}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StockComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should definis a title as titreH2' , () => {

		const fixture = TestBed.createComponent(StockComponent);
		fixture.detectChanges();

		const compiled = fixture.debugElement.nativeElement;

		expect( compiled.querySelector('#titreH2').textContent ).toContain('List previsionel');
		 
	})
});
