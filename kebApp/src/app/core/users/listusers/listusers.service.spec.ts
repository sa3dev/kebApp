import { TestBed } from '@angular/core/testing';

import { ListusersService } from './listusers.service';

describe('ListusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListusersService = TestBed.get(ListusersService);
    expect(service).toBeTruthy();
  });
});
