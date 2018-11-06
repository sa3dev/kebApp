import { CalendarRoutingModule } from './calendar-routing.module';

describe('CalendarRoutingModule', () => {
  let calendarRoutingModule: CalendarRoutingModule;

  beforeEach(() => {
    calendarRoutingModule = new CalendarRoutingModule();
  });

  it('should create an instance', () => {
    expect(calendarRoutingModule).toBeTruthy();
  });
});
