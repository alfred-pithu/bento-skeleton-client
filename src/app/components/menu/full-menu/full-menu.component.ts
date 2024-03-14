import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-full-menu',
  templateUrl: './full-menu.component.html',
  styleUrl: './full-menu.component.css'
})
export class FullMenuComponent implements OnInit {

  @Input() menuData$ !: Observable<any[]>

  fullMenuData: any[] = []

  hasDataReached: boolean = false;

  searchValue = '';
  visible = false;
  listOfDisplayData: any[] = []



  ngOnInit(): void {

    this.menuData$.subscribe({
      next: (data) => {
        this.fullMenuData = data
        this.listOfDisplayData = [...this.fullMenuData]
        this.hasDataReached = true
      },
      error: (error) => {
        console.log(error)
      }
    })

  }


  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.fullMenuData.filter((data: any) => {
      return data.item.itemName.toLowerCase().includes(this.searchValue.toLowerCase())
    })
  }




}
