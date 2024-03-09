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
  listOfDisplayData: any[] = []
  seletedTimeSpan = '30'

  searchValue: string = ''

  ngOnInit(): void {

    this.allMarketplaceOrders$.subscribe({
      next: (data) => {
        this.marketplaceOrderData = data.orders
        console.log(this.marketplaceOrderData);
        this.listOfDisplayData = [...this.marketplaceOrderData]
        this.hasDataReached = true
      },
      error: (error) => {
        console.log(error);
      }
    })

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
    this.search();
  }

  search(): void {
    this.listOfDisplayData = this.marketplaceOrderData.filter((data: any) => data._id === (this.searchValue).trim())
    this.visible = false;
  }


}
