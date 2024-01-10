import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IUser } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class SkeletonApiService {
  constructor(private http: HttpClient) {}

  rootUrl = environment.API_URL;

  login(
    email: string,
    password: string
  ): Observable<{ status: string; user: IUser }> {
    return this.http.post<{ status: string; user: IUser }>(
      this.rootUrl + '/auth/login',
      { email, password }
    );
  }

  getServicesForUser(): Observable<{ message: string[] }> {
    return this.http.get<{ message: string[] }>(
      this.rootUrl + '/auth/services'
    );
  }

  getRedirectUrl(
    service: string
  ): Observable<{ status: string; redirect: string }> {
    return this.http.get<{ status: string; redirect: string }>(
      this.rootUrl + '/service-auth/redirect/' + service
    );
  }

  getUserFromToken(): Observable<{ user: IUser}> {
    return this.http.get<{ user: IUser }>(
      this.rootUrl + '/service-auth/user-from-token'
    );
  }
}
