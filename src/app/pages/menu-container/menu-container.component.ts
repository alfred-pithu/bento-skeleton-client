import { Component, OnInit } from '@angular/core';
import { MenuBuilderService } from '../../services/menu-builder/menu-builder.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrl: './menu-container.component.css'
})
export class MenuContainerComponent implements OnInit {
  menuData$!: Observable<any[]>
  constructor(private menuService: MenuBuilderService, private router: Router) { }

  ngOnInit(): void {
    this.menuData$ = this.menuService.getOneRestaurantMenu()
  }


  navigateToInventory() {
    this.router.navigateByUrl('/redirect?service=menu-builder')
  }
}
