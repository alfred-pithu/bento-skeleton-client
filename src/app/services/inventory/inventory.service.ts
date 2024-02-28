import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }



  getCurrentInventory(): Observable<any> {
    const restaurantId = localStorage.getItem('restaurantId')
    const baseUrl = environment.INVENTORY_BACKEND
    return this.http.get<any>(`${baseUrl}/v1/ingredient/restaurant/${restaurantId}`)
  }

}
