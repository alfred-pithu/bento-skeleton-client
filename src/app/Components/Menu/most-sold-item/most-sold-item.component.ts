import { combinePosAndMarketplaceMostSoldItemsData, prepareDataForMarketplaceOrdersChart, prepareDataForPosOrders } from '../../../utils/orderProcessing';
import { PosMarketplaceOrdersService } from './../../../services/pos-marketplace-orders/pos-marketplace-orders.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};


@Component({
  selector: 'app-most-sold-item',
  templateUrl: './most-sold-item.component.html',
  styleUrl: './most-sold-item.component.css'
})
export class MostSoldItemComponent implements OnInit {
  hasDataReached: boolean = false;
  selectedChart: string = 'POS'

  posMostSoldItemsData: any[] = [];
  marketplaceMostSoldItemsData: any[] = [];
  combinedMostSoldItemsData: any[] = []


  @ViewChild("chart") chart!: ChartComponent;
  public posChartOptions: any;
  public marketplaceChartOptions: any;
  public combinedChartOptions: any;

  constructor(private orderService: PosMarketplaceOrdersService) { }

  async ngOnInit(): Promise<void> {

    try {
      await this.executePosChart()
      await this.executeMarketplaceChart()
      this.executeCombinedChart()

    } catch (error) {
      console.log(error);
    }

  }


  // All Tasks of POS Chart
  async executePosChart() {
    try {
      const data = await this.orderService.getAllPosOrders().toPromise()
      const result = prepareDataForPosOrders(data)
      this.posMostSoldItemsData = result;
      this.hasDataReached = true
      // console.log('pos', this.posMostSoldItemsData);


      // Chart Options
      this.posChartOptions = {
        colors: ['#4d3a96', '#4576b5'],
        series: [
          {
            name: "Item in number of POS orders",
            data: this.posMostSoldItemsData.map((i) => i.presentInOrdersCount),
            color: "#05CC79",

          }
        ],
        chart: {
          type: "bar",
          height: 250
        },
        plotOptions: {
          bar: {
            horizontal: true,

          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: this.posMostSoldItemsData.map((i) => i.itemName),

        },
        yaxis: {

        }
      };

    } catch (error) {
      console.log(error);
    }
  }


  // All Tasks of Marketplace Chart
  async executeMarketplaceChart() {
    const data = await this.orderService.getAllMarketplaceOrders().toPromise()
    const result = prepareDataForMarketplaceOrdersChart(data.orders)
    this.marketplaceMostSoldItemsData = result
    // console.log('marketplace', this.marketplaceMostSoldItemsData);


    // Chart Options
    this.marketplaceChartOptions = {
      colors: ['#4d3a96', '#4576b5'],
      series: [
        {
          name: "Item in number of Marketplace orders",
          data: this.marketplaceMostSoldItemsData.map((i) => i.presentInOrdersCount),
          // data: [1, 2, 3, 4, 5],
          color: "#05CC79",

        }
      ],
      chart: {
        type: "bar",
        height: 250
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: 20
          // columnWidth: 5,
          // rowWidth: 20


        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: this.marketplaceMostSoldItemsData.map((i) => i.itemName),

      },
      yaxis: {

      }
    };
  }



  // All Tasks of Combined Chart
  executeCombinedChart() {
    if (this.posMostSoldItemsData && this.marketplaceMostSoldItemsData) {
      const result = combinePosAndMarketplaceMostSoldItemsData(this.posMostSoldItemsData, this.marketplaceMostSoldItemsData)
      this.combinedMostSoldItemsData = result



      // Chart Options
      this.combinedChartOptions = {
        colors: ['#4d3a96', '#4576b5'],
        series: [
          {
            name: "Item in number of Combined orders",
            data: this.combinedMostSoldItemsData.map((i) => i.presentInOrdersCount),
            // data: [1, 2, 3, 4, 5],
            color: "#05CC79",

          }
        ],
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: 10
            // columnWidth: 5,
            // rowWidth: 20


          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: this.combinedMostSoldItemsData.map((i) => i.itemName),

        },
        yaxis: {

        }
      };


    }
  }



}
