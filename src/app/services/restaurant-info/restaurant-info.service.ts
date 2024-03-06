import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantInfoService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.API_URL;
  private restaurantId = localStorage.getItem("restaurantId")

  getOneRestaurantInfo(): Observable<any> {
    const url = this.baseUrl + "/marketplace/restaurant-details/" + this.restaurantId
    return this.http.get<any>(url)
  }

  updateOneRestaurantInfo(data: any): Observable<any> {
    const url = this.baseUrl + "/skeleton/update-restaurant/" + this.restaurantId
    return this.http.put<any>(url, data)
  }


}
