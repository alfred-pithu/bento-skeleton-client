import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CountryInterface } from '../../Interfaces/Country.interface';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  rootUrl = environment.API_URL;

  getAllCountry(): Observable<CountryInterface[]> {
    return this.http.get<CountryInterface[]>(
      this.rootUrl + '/skeleton/get-all-countries'
    );
  }
}
