import { Calendar1Module } from './calendar1.module';

describe('CalendarModule', () => {
  let calendarModule: Calendar1Module;

  beforeEach(() => {
    calendarModule = new Calendar1Module();
  });

  it('should create an instance', () => {
    expect(calendarModule).toBeTruthy();
  });
});
