import { IIngredient, IOrder, IPacking, IRecipe } from "../Interfaces/OrderProcessing.interface";


// Prepare and Restructure Order data for sending to Inventory
export function extractIngredsFromOrder(fullOrder: IOrder) {

    const itemsArray = fullOrder.items;

    const allItemIngredStorage: IIngredient[] = [];


    itemsArray?.forEach((orderItem) => {


        const ingredsInThisItem: IIngredient[] = [...orderItem.item.ingredients.rawIngredients];

        // Deleting the No Ingreds
        if (orderItem.item.chosenOptions && orderItem.item.chosenOptions.no.length > 0) {
            const noIngreds = orderItem.item.chosenOptions?.no;
            noIngreds.forEach(((singleNoIngred) => {
                const foundIndex = ingredsInThisItem.findIndex((i) => i.id === singleNoIngred.id)
                if (foundIndex != -1) {
                    ingredsInThisItem.splice(foundIndex, 1)
                }
            }))
        }

        // Adding the recipe Ingreds
        if (orderItem.item.ingredients.recipes) {
            const ingredsFromReceipes: IIngredient[] = extractIngredsFromRecipeArr(orderItem.item.ingredients.recipes)
            ingredsFromReceipes.forEach((ingred) => ingredsInThisItem.push(ingred))
        }

        // Adding the add option Ingreds
        if (orderItem.item.chosenOptions?.add && orderItem.item.chosenOptions.add.length > 0) {
            const addArr = orderItem.item.chosenOptions.add
            addArr.forEach(ingred => ingredsInThisItem.push(ingred))
        }

        const duplicateFreeIngreds = removeDuplicateIngredsAndAddQuantity(ingredsInThisItem);

        duplicateFreeIngreds.forEach(ingred => allItemIngredStorage.push(ingred))

    })


    const duplicateFreeAllOrderItemIngreds = removeDuplicateIngredsAndAddQuantity(allItemIngredStorage);


    const ingredsPropertyNamesFixedArray = duplicateFreeAllOrderItemIngreds.map((ingred) => {
        return {
            id: ingred.id,
            ingredientName: ingred.ingredientName,
            unit: ingred.unitOfStock,
            quantity: ingred.quantity,
            costPerUnit: ingred.costPerUnit,
            caloriePerUnit: ingred.caloriesPerUnit
        }
    })



    return ingredsPropertyNamesFixedArray

}




// Extracts Ingredients from an array of Recipes and returns an array of Ingredients
export function extractIngredsFromRecipeArr(recipeArr: IRecipe[]): IIngredient[] {
    let ingredsArr: IIngredient[] = []
    recipeArr.forEach((singleRecipe) => {
        const ingreds = singleRecipe.ingredients
        ingreds.forEach((i) => ingredsArr.push(i))
    });
    return ingredsArr;
}



// Remove duplicate ingredients from an array of ingredients. And increases quantity of ingredient if found duplicate
export function removeDuplicateIngredsAndAddQuantity(ingredsArray: IIngredient[]): IIngredient[] {
    const resultIngredArray: IIngredient[] = [];
    ingredsArray.forEach(ingred => {
        const foundIndex = resultIngredArray.findIndex((el) => el.id === ingred.id)
        if (foundIndex === -1) {
            resultIngredArray.push(ingred)
        }
        else if (foundIndex > -1) {
            resultIngredArray[foundIndex].quantity = resultIngredArray[foundIndex].quantity + ingred.quantity
        }
    });

    return resultIngredArray
}


// Remove duplicate packaging
export function removeDuplicatePackaging(packagingArray: IPacking[]) {
    const resultingArray: IPacking[] = []

    packagingArray.forEach((singlePackaging) => {
        const foundIndex = resultingArray.findIndex((el) => el.id === singlePackaging.id)
        if (foundIndex === -1) {
            resultingArray.push({ ...singlePackaging, quantity: 1 })
        }
        else {
            const item = resultingArray[foundIndex];
            if (foundIndex != -1 && item && item.quantity) {
                item.quantity++;
            }
        }
    });

    return resultingArray;
}

export function ingredientPresentCounter(allIngredsArr: any[]) {
    const counterArr: any[] = []
    allIngredsArr.forEach((ingred) => {
        const index = counterArr.findIndex((d) => d.id === ingred.id)
        if (index == -1) {
            counterArr.push({
                ingredientName: ingred.ingredientName,
                presenceInOrders: 0,
                id: ingred.id
            })
        } else {
            counterArr[index].presenceInOrders++
        }
    })

    return counterArr

}

