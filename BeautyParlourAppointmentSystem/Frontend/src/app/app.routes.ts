import { Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseBookingComponent } from './course-booking/course-booking.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

export const routes: Routes = [
    { path: '',component: FrontpageComponent},
    { path: 'course', component: CourseComponent },  
    { path: 'booking', component: CourseBookingComponent }  
];