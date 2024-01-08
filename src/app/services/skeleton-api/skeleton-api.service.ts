import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< Updated upstream
import { IUser } from '../../interfaces/user.interface';
import { environment } from '../../../environments/environment';
=======
import { IUser } from '../../Interfaces/user.interface';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root',
})
export class SkeletonApiService {
  constructor(private http: HttpClient) {}

  // Move this to an environment variable later.
  rootUrl = environment.API_URL;

<<<<<<< Updated upstream
  login (email: string, password: string) : Observable<{status: string, user: IUser}> {
    return this.http.post<{status: string, user: IUser}>(environment.API_URL + '/auth/login', { email, password });
  }

  getServicesForUser () : Observable<{ services: string[] }> {
    return this.http.get<{ services: string[] }>(environment.API_URL + '/auth/services');
  }

  getRedirectUrl (service: string) : Observable<{ status: string, redirect: string }> {
    return this.http.get<{ status: string, redirect: string }>(environment.API_URL + '/service-auth/redirect/' + service);
=======
  login(
    email: string,
    password: string
  ): Observable<{ status: string; user: IUser }> {
    return this.http.post<{ status: string; user: IUser }>(
      this.rootUrl + '/auth/login',
      { email, password }
    );
  }

  getServicesForUser(): Observable<{ services: string[] }> {
    return this.http.get<{ services: string[] }>(
      this.rootUrl + '/auth/services'
    );
  }

  getRedirectUrl(
    service: string
  ): Observable<{ status: string; redirect: string }> {
    return this.http.get<{ status: string; redirect: string }>(
      this.rootUrl + '/service-auth/redirect/' + service
    );
>>>>>>> Stashed changes
  }
}
