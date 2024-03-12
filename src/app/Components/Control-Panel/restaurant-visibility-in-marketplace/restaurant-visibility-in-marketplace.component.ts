import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantInfoService } from '../../../services/restaurant-info/restaurant-info.service';
import { ToastMessageService } from '../../../services/toast-message/toast-message.service';
import { IRestaurant } from '../../../Interfaces/RestaurantInfo.interface';

@Component({
  selector: 'app-restaurant-visibility-in-marketplace',
  templateUrl: './restaurant-visibility-in-marketplace.component.html',
  styleUrl: './restaurant-visibility-in-marketplace.component.css'
})
export class RestaurantVisibilityInMarketplaceComponent implements OnInit {

  constructor(private restaurantInfoService: RestaurantInfoService, private toast: ToastMessageService) { }


  @Input() restaurantInfo$!: Observable<IRestaurant>
  oneRestaurantInfo!: IRestaurant;
  hasDataReached: boolean = false;
  isModalVisible: boolean = false;

  ngOnInit(): void {
    this.restaurantInfo$.subscribe({
      next: (data: IRestaurant) => {
        this.oneRestaurantInfo = data
        console.log('OnInit showInMarketPlace', this.oneRestaurantInfo);
        this.hasDataReached = true
      },
      error: (error) => [
        console.log(error)
      ]
    })
  }


  showModal() {
    this.isModalVisible = true;
  }

  handleOk() {
    const dataForBackend = { showInMarketPlace: !this.oneRestaurantInfo.showInMarketPlace }
    this.isModalVisible = false;

    this.restaurantInfoService.updateOneRestaurantInfo(dataForBackend).subscribe({
      next: (data) => {
        console.log('data after put request', data);
        this.oneRestaurantInfo = data
        this.toast.setMessage('Updated Successfully', 'success')
      },
      error: (error) => {
        console.log(error);
        this.toast.setMessage('Error Occured! . Please reload and try again', 'error')
      }
    })
  }
  handleCancel() {
    this.isModalVisible = false;
  }

}
