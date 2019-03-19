import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Schedule } from '../components/schedule/schedule.model';



@Injectable({
  providedIn: 'root'
})



export class ScheduleService {

  apiURL: string = 'http://localhost:3000/schedule';
  

  constructor(private http: HttpClient) { }


  postSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.apiURL, schedule);
  }

}

