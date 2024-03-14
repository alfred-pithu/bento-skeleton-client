import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IOrder } from '../../Interfaces/orderProcessing.interface';
import { IMarketplaceOrderHttpData } from '../../Interfaces/marketplace.interface';

@Injectable({
  providedIn: 'root'
})
export class PosMarketplaceOrdersService {

  constructor(private http: HttpClient) { }

  restaurantId = localStorage.getItem('restaurantId')
  posBaseUrl = environment.POS_BACKEND
  marketplaceBaseUrl = environment.MARKETPLACE_BACKEND


  getAllPosOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.posBaseUrl}/order/all`)
  }

  getAllMarketplaceOrders(): Observable<IMarketplaceOrderHttpData> {
    return this.http.get<IMarketplaceOrderHttpData>(`${this.marketplaceBaseUrl}/orders/processing/${this.restaurantId}`)
  }
}
