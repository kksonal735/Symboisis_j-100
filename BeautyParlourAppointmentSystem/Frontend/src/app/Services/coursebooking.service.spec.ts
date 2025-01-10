import { TestBed } from '@angular/core/testing';

import { CoursebookingService } from './coursebooking.service';

describe('CoursebookingService', () => {
  let service: CoursebookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursebookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
