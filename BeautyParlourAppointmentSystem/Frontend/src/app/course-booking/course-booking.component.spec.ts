import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBookingComponent } from './course-booking.component';

describe('CourseBookingComponent', () => {
  let component: CourseBookingComponent;
  let fixture: ComponentFixture<CourseBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
