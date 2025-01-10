import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CoursebookingService } from '../Services/coursebooking.service';
import { Booking } from '../Classes/booking';

@Component({
  selector: 'app-course-booking',
  imports:[CommonModule,FormsModule],
  templateUrl: './course-booking.component.html',
  styleUrls: ['./course-booking.component.css']
})
export class CourseBookingComponent implements OnInit {
  router: Router;
  userName: string = 'Sonal khamkhedkar';
  selectedCourse: string = '';
  selectedCoursePrice: number | null = null;
  email: string = '';
  clientId:number=3;
  courseId:number=14;
  bookingStatus:string="pending";
  bookingDate: Date | undefined;
  courses = [
    { name: 'Beauty essentials master class', price: 30000 },
    { name: 'Hair styling course', price: 18000 },
    { name: 'Nail art course', price: 15000 },
    { name: 'Skin care course', price: 8000 }
  ];

  constructor(private bookingApi: CoursebookingService, private _router: Router,private fb:FormBuilder) {
    this.router = _router;
  }

  ngOnInit(): void {
    console.log("Course booking component initialized");
  }

  displayPrice() {
    const selected = this.courses.find(course => course.name === this.selectedCourse);
    if (selected) {
      this.selectedCoursePrice = selected.price;
    } else {
      this.selectedCoursePrice = null;
    }
  }

  bookCourse() {
    if (this.selectedCourse) {
      console.log(`Course booked: ${this.selectedCourse}`);
      alert(`Course booked successfully: ${this.selectedCourse}`);
    } else {
      alert('Please select a course and fill in all the details.');
    }
  }

  onSubmit() {
    if (this.selectedCourse !==null && this.email !==null) {
      const selectedCourse = this.courses.find(course => course.name === this.selectedCourse);
      const newBooking: Booking = {
        course:{courseId: this.courseId},
        client:{clientId: this.clientId},
        bookingStatus: this.bookingStatus,
        bookingDate:this.bookingDate
      };
      this.bookingApi.createBooking(newBooking).subscribe(
        (data) => {
          console.log('Booking created successfully:', data);
          alert('Booking created successfully!');
        },
        error => {
          console.error('Error occurred while creating booking:', error);
          alert('There was an issue with the booking process. Please try again.');
        }
      );
    } else {
      alert('Please complete all required fields.');
    }
  }
}

