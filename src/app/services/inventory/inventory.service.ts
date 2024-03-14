import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';
import { Ingredient, OrderToSupplier, OrderToSupplierHttpData, WastedIngredient } from '../../Interfaces/inventory.interface';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  restaurantId = localStorage.getItem('restaurantId')
  baseUrl = environment.INVENTORY_BACKEND

  getCurrentInventory(): Observable<{ ingredients: Ingredient[] }> {
    return this.http.get<{ ingredients: Ingredient[] }>(`${this.baseUrl}/v1/ingredient/restaurant/${this.restaurantId}`)
  }

  getCurrentOrders(): Observable<OrderToSupplierHttpData> {
    return this.http.get<OrderToSupplierHttpData>(`${this.baseUrl}/v1/order/restaurant/${this.restaurantId}`)
  }

  getMostWastedIngreds(): Observable<WastedIngredient[]> {
    return this.http.get<WastedIngredient[]>(`${this.baseUrl}/v1/wasteLog/restaurant/${this.restaurantId}/sevenMostWasted`)
  }



}
