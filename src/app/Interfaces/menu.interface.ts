import { IItem } from "./orderProcessing.interface";

export interface IPosMostSoldItemChartData {
    itemId: string,
    itemImage: string,
    itemName: string,
    presentInOrdersCount: number
}

// export interface IMenuItemData {
//     _id: string;
//     restaurantId: number;
//     categoryId: string;
//     categoryName: string;
//     mealTimeId: number;
//     item: IItem;
//     __v: number;
// }