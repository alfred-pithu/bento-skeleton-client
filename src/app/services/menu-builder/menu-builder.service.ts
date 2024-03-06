import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuBuilderService {

  constructor(private http: HttpClient) { }

  getOneRestaurantMenu(): Observable<any[]> {
    const url = `${environment.MENU_BUILDER_BACKEND}/menuItem/restaurant/${localStorage.getItem('restaurantId')}`
    return this.http.get<any[]>(url)
  }

  updateOneRestaurant(data: any, id: number | string): Observable<any> {
    const url = `${environment.MENU_BUILDER_BACKEND}/menuItem/edit/${id}`
    return this.http.put<any>(url, data)

  }

}

