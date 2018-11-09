import { RestaurantmenuRoutingModule } from './restaurantmenu-routing.module';

describe('RestaurantmenuRoutingModule', () => {
  let restaurantmenuRoutingModule: RestaurantmenuRoutingModule;

  beforeEach(() => {
    restaurantmenuRoutingModule = new RestaurantmenuRoutingModule();
  });

  it('should create an instance', () => {
    expect(restaurantmenuRoutingModule).toBeTruthy();
  });
});
