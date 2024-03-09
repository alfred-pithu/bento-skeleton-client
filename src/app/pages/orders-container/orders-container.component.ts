import { Component, OnInit } from '@angular/core';
import { PosMarketplaceOrdersService } from '../../services/pos-marketplace-orders/pos-marketplace-orders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders-container',
  templateUrl: './orders-container.component.html',
  styleUrl: './orders-container.component.css'
})
export class OrdersContainerComponent implements OnInit {

  allPosOrders$!: Observable<any>
  allMarketplaceOrders$!: Observable<any>

  constructor(private posMarketplaceOrders: PosMarketplaceOrdersService) { }

  ngOnInit(): void {
    this.allMarketplaceOrders$ = this.posMarketplaceOrders.getAllMarketplaceOrders();
    this.allPosOrders$ = this.posMarketplaceOrders.getAllPosOrders()
  }

}
