import { ToastMessageService } from './../../../services/toast-message/toast-message.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuBuilderService } from '../../../services/menu-builder/menu-builder.service';

@Component({
  selector: 'app-control-menu-item-visibility',
  templateUrl: './control-menu-item-visibility.component.html',
  styleUrl: './control-menu-item-visibility.component.css'
})
export class ControlMenuItemVisibilityComponent implements OnInit {

  constructor(private menuService: MenuBuilderService, private toast: ToastMessageService) { }

  isModalVisible = false;
  changingMenuItemIndex!: number;
  changingSwitchName!: string;

  fullMenuData: any[] = []
  hasDataReached: boolean = false;
  searchValue = '';
  visible = false;
  listOfDisplayData: any[] = []



  ngOnInit(): void {

    this.menuService.getOneRestaurantMenu().subscribe({
      next: (data) => {
        this.fullMenuData = data
        // console.log(data);
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
      return data.item.itemName.toLowerCase().includes(this.searchValue.toLowerCase())
    })
  }



  showModal(index: number, switchName: string): void {
    this.isModalVisible = true;
    this.changingMenuItemIndex = index
    this.changingSwitchName = switchName;
  }

  handleOk(): void {
    this.isModalVisible = false;
    this.changingSwitchName === 'pos' ? this.handlePosSwitch() : this.handleMarketplaceSwitch();
  }

  handleCancel(): void {
    this.isModalVisible = false;
  }


  // POS Switch Handler
  handlePosSwitch() {
    this.fullMenuData[this.changingMenuItemIndex].item.availableInPos = !this.fullMenuData[this.changingMenuItemIndex].item.availableInPos

    const dataForBackend = {
      item: {
        ...this.fullMenuData[this.changingMenuItemIndex].item,
        availableInPos: this.fullMenuData[this.changingMenuItemIndex].item.availableInPos
      }
    }

    const _id = this.fullMenuData[this.changingMenuItemIndex]._id

    this.menuService.updateOneRestaurant(dataForBackend, _id).subscribe((data) => {
      if (data) {
        this.toast.setMessage('Updated Successfully', 'success')
      }
    })
  }

  // Marketplace Switch Handler
  handleMarketplaceSwitch() {
    this.fullMenuData[this.changingMenuItemIndex].item.availableInMarketPlace = !this.fullMenuData[this.changingMenuItemIndex].item.availableInMarketPlace

    const dataForBackend = {
      item: {
        ...this.fullMenuData[this.changingMenuItemIndex].item,
        availableInMarketPlace: this.fullMenuData[this.changingMenuItemIndex].item.availableInMarketPlace
      }
    }

    const _id = this.fullMenuData[this.changingMenuItemIndex]._id

    this.menuService.updateOneRestaurant(dataForBackend, _id).subscribe((data) => {
      if (data) {
        this.toast.setMessage('Updated Successfully', 'success')
      }
    })
  }


}
