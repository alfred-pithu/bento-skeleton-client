import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SkeletonApiService {

  constructor(private http: HttpClient) { }

  // Move this to an environment variable later.
  rootUrl = 'http://localhost:5000';

  login (email: string, password: string) : Observable<{status: string, user: IUser}> {
    return this.http.post<{status: string, user: IUser}>(this.rootUrl + '/auth/login', { email, password });
  }

  getServicesForUser () : Observable<{ services: string[] }> {
    return this.http.get<{ services: string[] }>(this.rootUrl+ '/auth/services');
  }

  getRedirectUrl (service: string) : Observable<{ status: string, redirect: string }> {
    return this.http.get<{ status: string, redirect: string }>(this.rootUrl + '/service-auth/redirect/' + service);
  }
}