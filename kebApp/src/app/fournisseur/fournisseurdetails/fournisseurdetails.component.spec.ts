import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurdetailsComponent } from './fournisseurdetails.component';

describe('FournisseurdetailsComponent', () => {
  let component: FournisseurdetailsComponent;
  let fixture: ComponentFixture<FournisseurdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseurdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
