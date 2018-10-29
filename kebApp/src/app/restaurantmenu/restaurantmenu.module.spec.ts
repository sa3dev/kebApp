import { RestaurantmenuModule } from './restaurantmenu.module';

describe('RestaurantmenuModule', () => {
  let restaurantmenuModule: RestaurantmenuModule;

  beforeEach(() => {
    restaurantmenuModule = new RestaurantmenuModule();
  });

  it('should create an instance', () => {
    expect(restaurantmenuModule).toBeTruthy();
  });
});
