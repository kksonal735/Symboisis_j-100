import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseBookingComponent } from './course-booking/course-booking.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule,CourseComponent,CourseBookingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parlour';
}
