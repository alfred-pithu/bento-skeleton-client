import { InventoryService } from './../../services/inventory/inventory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-inventory',
  templateUrl: './current-inventory.component.html',
  styleUrl: './current-inventory.component.css'
})
export class CurrentInventoryComponent implements OnInit {
  constructor(private inventoryService: InventoryService) { }

  currentInventoryData: any;
  searchedInputValue: string = '';
  searchedIngredientDetails!: any[]
  hasDataReached: boolean = false;



  ngOnInit(): void {
    this.inventoryService.getCurrentInventory().subscribe((data) => {
      if (data) {
        // console.log('inventory data', data.ingredients);
        this.currentInventoryData = data.ingredients
        this.hasDataReached = true
      }
    })
  }

  searchIngredient() {
    if (this.searchedInputValue) {
      const result = this.currentInventoryData.filter((data: any) => {
        return data.ingredientName.toLowerCase().includes(this.searchedInputValue.toLowerCase())
      })
      this.searchedIngredientDetails = result
      // console.log('searched res', result);
      this.searchedInputValue = ''
    }
    else if (!this.searchedInputValue) this.searchedIngredientDetails = []

  }

}
