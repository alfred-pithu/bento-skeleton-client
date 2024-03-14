export interface IMarketplaceOrder {
    _id: string;
    userId: string;
    deliveryFee: number;
    deliveryTime: number;
    cartItems: ICartItem[];
    restaurantId: string;
    subtotal: number;
    orderStatus: string;
    ordertype: string;
    delivery: boolean;
    pickup: boolean;
    createdAt: string; // ISO date string
    __v: number;
}

interface ICartItem {
    _id: string;
    resId: string;
    cartId: string;
    name: string;
    image: string;
    description: string;
    quantity: number;
    price: number;
    addon: any[];
    no: any[];
}

export interface IMarketplaceOrderHttpData {
    orders: IMarketplaceOrder[]
}

export interface IMarketplaceChartData {
    itemId: number
    itemName: string,
    itemImage: string,
    presentInOrdersCount: number
}