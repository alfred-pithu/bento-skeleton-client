import { Observable } from 'rxjs';
import { RestaurantInfoService } from './../../services/restaurant-info/restaurant-info.service';
import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../../Interfaces/restaurantInfo.interface';

@Component({
  selector: 'app-control-panel-container',
  templateUrl: './control-panel-container.component.html',
  styleUrl: './control-panel-container.component.css'
})
export class ControlPanelContainerComponent implements OnInit {

  restaurantInfo$!: Observable<any>

  constructor(private restaurantInfoService: RestaurantInfoService) { }

  ngOnInit(): void {
    this.restaurantInfo$ = this.restaurantInfoService.getOneRestaurantInfo();
  }

}
