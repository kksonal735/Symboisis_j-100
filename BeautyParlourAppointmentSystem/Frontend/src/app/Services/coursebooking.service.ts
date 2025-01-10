import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../Classes/booking';

@Injectable({
  providedIn: 'root'
})
export class CoursebookingService {
  apiUrl:string =  'http://localhost:8080/booking';

  constructor(private httpClient: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  createBooking(booking: Booking): Observable<Booking> {
   console.log("Create"+booking);
   console.log(JSON.stringify(booking))
   return this.httpClient.post<Booking>(this.apiUrl + '/CreateBooking', booking,this.httpOptions).pipe(     
    );
  }
}