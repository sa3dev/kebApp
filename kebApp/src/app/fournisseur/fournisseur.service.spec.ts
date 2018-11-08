import { TestBed,async } from '@angular/core/testing';

import { FournisseurService } from './fournisseur.service';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Fournisseur } from './fournisseur.model';
describe('FournisseurService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule
    ]
  }));

  it('should be created', async( () => {
  
    const service: FournisseurService = TestBed.get(FournisseurService);
    
    expect(service).toBeTruthy();
    expect(service.getFournisseur() instanceof BehaviorSubject).toBe(true);
    expect(service.getFournisseur().value instanceof Array ).toBe(true);
    
    })); 
  
});
