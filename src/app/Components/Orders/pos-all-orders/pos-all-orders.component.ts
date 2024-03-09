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
  listOfDisplayData: any[] = []
  searchValue: string = ''

  ngOnInit(): void {
    this.allPosOrders$.subscribe({
      next: (data) => {
        this.posOrders = data;
        this.listOfDisplayData = [...this.posOrders]
        console.log(this.posOrders);
        this.hasDataReached = true
      }
    })
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
    this.search();
    this.listOfDisplayData = this.posOrders
  }

  search(): void {
    if (this.searchValue) {
      this.listOfDisplayData = this.posOrders.filter((data: any) => data._id === (this.searchValue).trim())
      this.visible = false;
    }
  }


}
