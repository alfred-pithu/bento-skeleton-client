import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../../Interfaces/UserInterface';

@Injectable({
  providedIn: 'root',
})
export class SkeletonApiService {
  constructor(private http: HttpClient) {}

  // Move this to an environment variable later.
  rootUrl = 'http://localhost:5000';

  login(email: string, password: string): Observable<{ status: string }> {
    return this.http.post<{ status: string; user: UserInterface }>(this.rootUrl + '/auth/login',{ email, password });
  }
}
