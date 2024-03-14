import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marketplace-all-orders',
  templateUrl: './marketplace-all-orders.component.html',
  styleUrl: './marketplace-all-orders.component.css'
})
export class MarketplaceAllOrdersComponent implements OnInit {
  @Input() allMarketplaceOrders$!: Observable<any>
  hasDataReached: Boolean = false;
  visible: boolean = false;
  marketplaceOrderData!: any
  listOfDisplayDataForLast30Days: any[] = []
  listOfDisplayDataForLast7Days: any[] = []
  selectedTimeSpan = '30'

  searchValue: string = ''

  ngOnInit(): void {

    this.allMarketplaceOrders$.subscribe({
      next: (data) => {
        this.marketplaceOrderData = data.orders
        this.listOfDisplayDataForLast30Days = [...this.marketplaceOrderData]
        this.getOrderOfLast7Days()
        this.hasDataReached = true
      },
      error: (error) => {
        console.log(error);
      }
    })

  }

  getOrderOfLast7Days() {
    const filteredArray = this.marketplaceOrderData.filter((order: any) => {
      const createdDate = new Date(order.createdAt)
      let sevenDaysAgoDate = new Date();
      sevenDaysAgoDate.setDate(sevenDaysAgoDate.getDate() - 8);
      return createdDate >= sevenDaysAgoDate
    })

    this.listOfDisplayDataForLast7Days = filteredArray;
  }

  conertTtemNamesToStringFromArray(data: any) {
    const itemNameArray = data.cartItems.map((i: any) => i.name)
    const string = itemNameArray.join()
    return string
  }

  convertDateTimeToReadableFormat(date: Date) {
    const convertedDate = new Date(date).toLocaleString()
    return convertedDate
  }

  reset(): void {
    this.searchValue = '';
    if (this.selectedTimeSpan === '30') {
      this.listOfDisplayDataForLast30Days = [...this.marketplaceOrderData]
    } else if (this.selectedTimeSpan === '7') {
      this.getOrderOfLast7Days()
    }
    this.visible = false;

  }

  search(): void {
    if (this.searchValue) {

      if (this.selectedTimeSpan === '30') {
        this.listOfDisplayDataForLast30Days = this.marketplaceOrderData.filter((data: any) => data._id === (this.searchValue).trim())
        this.visible = false;
      } else if (this.selectedTimeSpan === '7') {
        this.listOfDisplayDataForLast7Days = this.marketplaceOrderData.filter((data: any) => data._id === (this.searchValue).trim())
        this.visible = false;
      }
    }

  }


}
