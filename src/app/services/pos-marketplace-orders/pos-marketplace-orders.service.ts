import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PosMarketplaceOrdersService {

  constructor(private http: HttpClient) { }

  restaurantId = localStorage.getItem('restaurantId')
  posBaseUrl = environment.POS_BACKEND
  marketplaceBaseUrl = environment.MARKETPLACE_BACKEND


  getAllPosOrders(): Observable<any> {
    return this.http.get(`${this.posBaseUrl}/order/all`)
  }
}
