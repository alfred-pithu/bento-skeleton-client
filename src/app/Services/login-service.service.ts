import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginData } from '../Interfaces/LoginDataInterface';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  private apiUrl = '';

  sendLoginDataToBackend(dataObj: ILoginData): Observable<any> {
    console.log(dataObj);
    return this.http.post<any>(this.apiUrl, dataObj);
  }
}
