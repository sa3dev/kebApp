import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutfournisseurComponent } from './routfournisseur.component';

describe('RoutfournisseurComponent', () => {
  let component: RoutfournisseurComponent;
  let fixture: ComponentFixture<RoutfournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutfournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
