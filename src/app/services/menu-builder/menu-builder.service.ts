import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IItem } from '../../Interfaces/orderProcessing.interface';
// import { IMenuItemData } from '../../Interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuBuilderService {

  constructor(private http: HttpClient) { }

  restaurantId = localStorage.getItem('restaurantId')

  getOneRestaurantMenu(): Observable<IItem[]> {
    const url = `${environment.MENU_BUILDER_BACKEND}/menuItem/restaurant/${this.restaurantId}`
    return this.http.get<IItem[]>(url)
  }

  updateOneRestaurant(data: any, id: number | string): Observable<any> {
    const url = `${environment.MENU_BUILDER_BACKEND}/menuItem/edit/${id}`
    return this.http.put<any>(url, data)

  }

}

