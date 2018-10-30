import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurcomponentComponent } from './fournisseurcomponent.component';

describe('FournisseurcomponentComponent', () => {
  let component: FournisseurcomponentComponent;
  let fixture: ComponentFixture<FournisseurcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseurcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
