import { ToastMessageService } from './../../../services/toast-message/toast-message.service';
import { RestaurantInfoService } from './../../../services/restaurant-info/restaurant-info.service';
import { SkeletonApiService } from './../../../services/skeleton-api/skeleton-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRestaurant } from '../../../Interfaces/restaurantInfo.interface';

@Component({
  selector: 'app-set-discount',
  templateUrl: './set-discount.component.html',
  styleUrl: './set-discount.component.css'
})
export class SetDiscountComponent implements OnInit {

  constructor(private restaurantInfoService: RestaurantInfoService, private toast: ToastMessageService) { }

  @Input() restaurantInfo$!: Observable<IRestaurant>
  discountInputValueMarketplace!: number
  discountInputValuePos!: number
  showInputFieldMarketplace: boolean = false
  showInputFieldPos: boolean = false

  restaurantInfo!: IRestaurant
  hasDataReached!: boolean;

  ngOnInit(): void {
    this.restaurantInfo$.subscribe({
      next: (data) => {
        this.restaurantInfo = data
        this.hasDataReached = true
        this.discountInputValueMarketplace = this.restaurantInfo.marketplaceDiscountPercentage
        this.discountInputValuePos = this.restaurantInfo.posDiscountPercentage
      }
    })
  }

  handleEditMarketplaceDiscount() {
    this.showInputFieldMarketplace = true
  }

  handleEditPosDiscount() {
    this.showInputFieldPos = true
  }

  handleSubmitNewMarketplaceDiscount() {
    if (this.discountInputValueMarketplace < 0) {
      this.toast.setMessage('Please Provide A Positive Value', 'info')

    }
    else if (this.discountInputValueMarketplace === this.restaurantInfo.marketplaceDiscountPercentage) {
      this.toast.setMessage('Value same as previous', 'info')
    }
    else {
      const dataForBackend = { marketplaceDiscountPercentage: this.discountInputValueMarketplace }
      this.restaurantInfoService.updateOneRestaurantInfo(dataForBackend).subscribe({
        next: (data) => {
          this.restaurantInfo.marketplaceDiscountPercentage = this.discountInputValueMarketplace;
          this.showInputFieldMarketplace = false
          this.toast.setMessage('Updated Successfully', 'success')
        },
        error: (error) => {
          console.log(error);
          this.toast.setMessage('Error Occured', 'error')

        }
      })
    }

  }

  handleSubmitNewPosDiscount() {
    if (this.discountInputValuePos < 0) {
      this.toast.setMessage('Please Provide A Positive Value', 'info')

    }
    else if (this.discountInputValuePos === this.restaurantInfo.posDiscountPercentage) {
      this.toast.setMessage('Value same as previous', 'info')
    }
    else {
      const dataForBackend = { posDiscountPercentage: this.discountInputValuePos }
      this.restaurantInfoService.updateOneRestaurantInfo(dataForBackend).subscribe({
        next: (data) => {
          this.restaurantInfo.posDiscountPercentage = this.discountInputValuePos;
          this.showInputFieldPos = false
          this.toast.setMessage('Updated Successfully', 'success')
        },
        error: (error) => {
          console.log(error);
          this.toast.setMessage('Error Occured', 'error')

        }
      })
    }
  }

  cancelMarketplaceDiscountEdit() {
    this.showInputFieldMarketplace = false
  }

  cancelPosDiscountEdit() {
    this.showInputFieldPos = false
  }

}
