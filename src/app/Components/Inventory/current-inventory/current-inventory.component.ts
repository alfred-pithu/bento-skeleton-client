import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../services/inventory/inventory.service';

@Component({
  selector: 'app-current-inventory',
  templateUrl: './current-inventory.component.html',
  styleUrl: './current-inventory.component.css'
})
export class CurrentInventoryComponent implements OnInit {
  constructor(private inventoryService: InventoryService) { }

  searchValue = '';
  visible = false;

  currentInventoryData!: any;
  hasDataReached: boolean = false;
  listOfDisplayData: any[] = []




  ngOnInit(): void {
    this.inventoryService.getCurrentInventory().subscribe((data) => {
      if (data) {
        this.currentInventoryData = data.ingredients
        this.listOfDisplayData = [...this.currentInventoryData]
        this.hasDataReached = true
      }
    })
  }


  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.currentInventoryData.filter((data: any) => {
      return data.ingredientName.toLowerCase().includes(this.searchValue.toLowerCase())
    })


  }
}
