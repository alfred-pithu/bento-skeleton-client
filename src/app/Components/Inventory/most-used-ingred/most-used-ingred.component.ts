import { extractIngredsFromOrder, ingredientPresentCounter, removeDuplicateIngredsAndAddQuantity } from '../../../utils/orderProcessing';
import { PosMarketplaceOrdersService } from './../../../services/pos-marketplace-orders/pos-marketplace-orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-used-ingred',
  templateUrl: './most-used-ingred.component.html',
  styleUrl: './most-used-ingred.component.css'
})
export class MostUsedIngredComponent implements OnInit {

  ingredientPresentInOrdersArray: any[] = []
  hasDataReached: boolean = false

  constructor(private orderService: PosMarketplaceOrdersService) { }

  ngOnInit(): void {
    this.orderService.getAllPosOrders().subscribe((data) => {
      if (data) {
        console.log('data.data', data);
        let allIngredsArr: any[] = []

        data.forEach((data: any) => {
          const ingreds = extractIngredsFromOrder(data);
          allIngredsArr = [...allIngredsArr, ...ingreds]
        })

        const counterArr = ingredientPresentCounter(allIngredsArr)

        this.ingredientPresentInOrdersArray = counterArr.sort((a, b) => b.presenceInOrders - a.presenceInOrders);
        console.log('counter array', this.ingredientPresentInOrdersArray);
        this.hasDataReached = true

      }
    })


  }

}
