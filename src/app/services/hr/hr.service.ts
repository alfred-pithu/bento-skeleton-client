import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    const url = environment.HR_BACKEND + '/employee/restaurant'
    return this.http.get(url)
  }


}
