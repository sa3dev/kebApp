import { TestBed } from '@angular/core/testing';

import { RestaurantmenuService } from './restaurantmenu.service';

describe('RestaurantmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantmenuService = TestBed.get(RestaurantmenuService);
    expect(service).toBeTruthy();
  });
});
