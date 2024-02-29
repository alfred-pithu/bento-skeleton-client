import { Component, OnInit } from '@angular/core';
import { MenuBuilderService } from '../../services/menu-builder/menu-builder.service';

@Component({
  selector: 'app-current-menu',
  templateUrl: './current-menu.component.html',
  styleUrl: './current-menu.component.css'
})
export class CurrentMenuComponent implements OnInit {
  fullMenu!: any[]

  constructor(private menuService: MenuBuilderService) { }


  ngOnInit(): void {
    this.menuService.getOneRestaurantMenu().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }


}
