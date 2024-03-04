import { Component, OnInit } from '@angular/core';
import { MenuBuilderService } from '../../services/menu-builder/menu-builder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrl: './menu-container.component.css'
})
export class MenuContainerComponent implements OnInit {
  menuData$!: Observable<any[]>
  constructor(private menuService: MenuBuilderService) { }

  ngOnInit(): void {
    this.menuData$ = this.menuService.getOneRestaurantMenu()
  }


}
