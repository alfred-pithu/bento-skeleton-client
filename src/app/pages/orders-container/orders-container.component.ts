import { Component, OnInit } from '@angular/core';
import { PosMarketplaceOrdersService } from '../../services/pos-marketplace-orders/pos-marketplace-orders.service';
import { Observable } from 'rxjs';
import { IMarketplaceOrderHttpData } from '../../Interfaces/marketplace.interface';
import { IOrder } from '../../Interfaces/orderProcessing.interface';

@Component({
  selector: 'app-orders-container',
  templateUrl: './orders-container.component.html',
  styleUrl: './orders-container.component.css'
})
export class OrdersContainerComponent implements OnInit {

  allPosOrders$!: Observable<IOrder[]>
  allMarketplaceOrders$!: Observable<IMarketplaceOrderHttpData>

  constructor(private posMarketplaceOrders: PosMarketplaceOrdersService) { }

  ngOnInit(): void {
    this.allMarketplaceOrders$ = this.posMarketplaceOrders.getAllMarketplaceOrders();
    this.allPosOrders$ = this.posMarketplaceOrders.getAllPosOrders()
  }

}
