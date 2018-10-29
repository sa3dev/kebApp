import { TestBed } from '@angular/core/testing';

import { CalendarDetailService } from './calendar-detail.service';

describe('CalendarDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarDetailService = TestBed.get(CalendarDetailService);
    expect(service).toBeTruthy();
  });
});
