export interface Ingredient {
    id: number;
    uniqueIngredientId: number;
    ingredientName: string;
    unitOfStock: string;
    currentStockQuantity: number;
    unitOfPrice: string;
    costPerUnit: number;
    caloriesPerUnit: number;
    reorderPoint: number;
    liquid: string;
    perishable: string;
    description: string;
    unitOfIdealStoringTemperature: string;
    idealStoringTemperature: number;
    expectedStockForToday: number;
    expectedStockForTomorrow: number;
    restaurantId: number;
    categoryId: number;
    createdAt: string;
    updatedAt: string;
}



export interface WastedIngredient {
    ingredientName: string,
    totalWaste: number
}


export interface OrderToSupplier {
    id: number;
    totalPrice: number;
    status: string;
    orderDate: string; // ISO date string
    deliveryDate: string; // ISO date string
    supplierId: number;
    restaurantId: number;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    ingredientBatches: SupplierOrderIngredient[],
    supplier: Supplier
}

interface SupplierOrderIngredient {
    id: number;
    uniqueIngredientId: number;
    ingredientName: string;
    unitOfStock: string;
    purchaseQuantity: number;
    currentStockQuantity: number;
    unitOfPrice: string;
    purchasePrice: number;
    costPerUnit: number;
    receivedAt: string; // ISO date string
    expirationDate: string; // ISO date string
    supplierId: number;
    ingredientId: number;
    orderId: number;
    restaurantId: number;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}

interface Supplier {
    id: number;
    vendorId: number;
    name: string;
    address: string;
    contactNumber: string;
    email: string;
    label: string;
    restaurantId: number;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}

export interface OrderToSupplierHttpData {
    orders: OrderToSupplier[]
}

export interface IMostUsedIngredient {
    id: number,
    ingredientName: string,
    unit: string,
    quantity: number,
    costPerUnit: number,
    caloriePerUnit: number,
}

export interface IMostUsedIngredientChartData {
    id: number,
    ingredientName: string,
    presenceInOrders: number
}