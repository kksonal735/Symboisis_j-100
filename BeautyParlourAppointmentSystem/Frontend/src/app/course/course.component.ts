import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
   constructor(private router: Router) {}
   goToBooking() {
    this.router.navigate(['/booking']);
  }
}
