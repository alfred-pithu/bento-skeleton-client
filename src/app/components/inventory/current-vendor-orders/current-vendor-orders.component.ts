import { OrderToSupplier } from './../../../Interfaces/inventory.interface';
import { OrderToSupplierHttpData } from '../../../Interfaces/inventory.interface';
import { InventoryService } from './../../../services/inventory/inventory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-vendor-orders',
  templateUrl: './current-vendor-orders.component.html',
  styleUrl: './current-vendor-orders.component.css'
})
export class CurrentVendorOrdersComponent implements OnInit {
  fetchedOrders: OrderToSupplier[] = []
  hasDataReached: boolean = false
  selectedOrder: any


  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {

    this.inventoryService.getCurrentOrders().subscribe({
      next: (data: OrderToSupplierHttpData) => {
        const currentDateTime = new Date()

        const filtered = data.orders.filter((order) => { return new Date(order.deliveryDate) > currentDateTime })

        this.fetchedOrders = filtered.map((order) => {
          return {
            ...order,
            status: 'Preparing',
            totalPrice: Number(order.totalPrice.toFixed(2)),

          }
        });

        this.hasDataReached = true;
      },
      error: (error) => {
        console.log(error);
      }
    })

  }

  prettifyDate(date: Date | string) {
    return new Date(date).toLocaleString()
  }


  onClickOverOrderRow(data: any) {
    this.selectedOrder = data
  }












}
