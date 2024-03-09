import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-container',
  templateUrl: './inventory-container.component.html',
  styleUrl: './inventory-container.component.css'
})
export class InventoryContainerComponent {
  constructor(private router: Router) { }
  navigateToInventory() {
    this.router.navigateByUrl('/redirect?service=inventory')
  }
}
