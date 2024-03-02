import { Component, OnInit } from '@angular/core';
import { MenuBuilderService } from '../../../services/menu-builder/menu-builder.service';

@Component({
  selector: 'app-full-menu',
  templateUrl: './full-menu.component.html',
  styleUrl: './full-menu.component.css'
})
export class FullMenuComponent implements OnInit {
  hasDataReached: boolean = false;
  fullMenuData: any[] = []

  searchValue = '';
  visible = false;
  listOfDisplayData: any[] = []


  constructor(private menuService: MenuBuilderService) { }

  ngOnInit(): void {

    this.menuService.getOneRestaurantMenu().subscribe({
      next: (data) => {
        // console.log('menu data', data)
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
      // return data.ingredientName.toLowerCase().includes(this.searchValue.toLowerCase())
      return data.item.itemName.toLowerCase().includes(this.searchValue.toLowerCase())
    })
  }

  // updateMenuPrice(data: any, index: number) {
  //   console.log('data from update menu method', data);
  // }



}
