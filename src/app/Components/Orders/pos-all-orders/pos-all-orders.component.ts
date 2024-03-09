import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pos-all-orders',
  templateUrl: './pos-all-orders.component.html',
  styleUrl: './pos-all-orders.component.css'
})
export class PosAllOrdersComponent implements OnInit {
  @Input() allPosOrders$!: Observable<any>
  posOrders!: any

  selectedTimeSpan = '30'

  hasDataReached: Boolean = false;
  visible: boolean = false;

  listOfDisplayDataForLast30Days!: any[]
  listOfDisplayDataForLast7Days!: any[]


  searchValue: string = ''

  ngOnInit(): void {
    this.allPosOrders$.subscribe({
      next: (data) => {
        this.posOrders = data;
        this.listOfDisplayDataForLast30Days = [...this.posOrders]
        this.getOrderOfLast7Days()
        console.log(this.posOrders);
        this.hasDataReached = true
      }
    })
  }

  getOrderOfLast7Days() {
    const filteredArray = this.posOrders.filter((order: any) => {
      const createdDate = new Date(order.orderPosted)
      let sevenDaysAgoDate = new Date();
      sevenDaysAgoDate.setDate(sevenDaysAgoDate.getDate() - 8);
      return createdDate >= sevenDaysAgoDate
    })

    this.listOfDisplayDataForLast7Days = filteredArray;
  }

  conertTtemNamesToStringFromArray(data: any) {
    const string = data.items.map((i: any) => i.item.itemName).join()
    return string;
  }


  convertDateTimeToReadableFormat(date: Date) {
    const convertedDate = new Date(date).toLocaleString()
    return convertedDate
  }

  reset(): void {
    this.searchValue = '';
    if (this.selectedTimeSpan === '30') {
      this.listOfDisplayDataForLast30Days = [...this.posOrders]
    } else if (this.selectedTimeSpan === '7') {
      this.getOrderOfLast7Days()
    }
    this.visible = false;

  }

  search(): void {
    if (this.searchValue) {

      if (this.selectedTimeSpan === '30') {
        this.listOfDisplayDataForLast30Days = this.posOrders.filter((data: any) => data._id === (this.searchValue).trim())
        this.visible = false;
      } else if (this.selectedTimeSpan === '7') {
        this.listOfDisplayDataForLast7Days = this.posOrders.filter((data: any) => data._id === (this.searchValue).trim())
        this.visible = false;
      }
    }

  }


}
