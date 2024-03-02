import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  restaurantId = localStorage.getItem('restaurantId')
  baseUrl = environment.INVENTORY_BACKEND

  getCurrentInventory(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/v1/ingredient/restaurant/${this.restaurantId}`)
  }

  getCurrentOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/v1/order/restaurant/${this.restaurantId}`).pipe(
    )
  }

  // https://inventory-server-klzl.onrender.com/v1/wasteLog/restaurant/1/sevenMostWasted
  getMostWastedIngreds(): Observable<any> {
    return this.http.get(`${this.baseUrl}/v1/wasteLog/restaurant/${this.restaurantId}/sevenMostWasted`)
  }



}
