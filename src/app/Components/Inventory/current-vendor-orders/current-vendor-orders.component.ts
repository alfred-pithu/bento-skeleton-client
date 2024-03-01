import { InventoryService } from './../../../services/inventory/inventory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-vendor-orders',
  templateUrl: './current-vendor-orders.component.html',
  styleUrl: './current-vendor-orders.component.css'
})
export class CurrentVendorOrdersComponent implements OnInit {
  fetchedOrders: any[] = []
  hasDataReached: boolean = false
  selectedOrder: any


  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {

    this.inventoryService.getCurrentOrders().subscribe({
      next: (data) => {
        const currentDateTime = new Date()

        const filtered = data.orders.filter((order: any) => { return new Date(order.deliveryDate) > currentDateTime })

        this.fetchedOrders = filtered.map((order: any) => {
          return {
            ...order,
            status: 'Preparing',
            totalPrice: Number(order.totalPrice.toFixed(2)),

          }
        });
        this.hasDataReached = true;
        // console.log('filtered and mapped data', this.fetchedOrders);
      },
      error: (error) => {
        console.log(error);
      }
    })

  }

  prettifyDate(date: any) {
    return new Date(date).toLocaleString()
  }


  onClickOverOrderRow(data: any) {
    this.selectedOrder = data
  }












}
