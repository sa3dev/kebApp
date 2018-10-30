import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterStockComponent } from './master-stock.component';

describe('MasterStockComponent', () => {
  let component: MasterStockComponent;
  let fixture: ComponentFixture<MasterStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
