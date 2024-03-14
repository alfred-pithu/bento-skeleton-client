import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'
import { CountriesInterface } from '../../Interfaces/country.interface'

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) { }

  rootUrl = environment.API_URL
  allCountryAPI = environment.All_Country_With_TZ_API

  getAllCountry(): Observable<CountriesInterface> {
    return this.http.get<CountriesInterface>(this.allCountryAPI)
  }

  sendRegistrationInfoToBackend(data: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.rootUrl}/skeleton/restaurant-register`, data, { headers })
  }
}
