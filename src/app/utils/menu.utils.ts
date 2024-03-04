import { extractIngredsFromRecipeArr } from "./orderProcessing"

export function processMenuDataForGettingMostProfitableItemInfo(fullMenu: any[]) {
    const resultArray = fullMenu.map((i: any) => {

        const totalPriceOfRawIngreds = i.item.ingredients.rawIngredients.reduce((accumulator: number, currentIngred: any) => {
            return accumulator + (currentIngred.costPerUnit * currentIngred.quantity)
        }, 0)


        const ingredientsFromReceipe = extractIngredsFromRecipeArr(i.item.ingredients.recipes)

        const totalPriceOfReceipeIngredients = ingredientsFromReceipe.reduce((accumulator: number, currentIngred: any) => {
            return accumulator + (currentIngred.costPerUnit * currentIngred.quantity)
        }, 0)

        const totalIngredCosting = totalPriceOfRawIngreds + totalPriceOfReceipeIngredients

        return {
            itemName: i.item.itemName,
            ingredientPrice: totalIngredCosting.toFixed(2),
            sellingPrice: i.item.itemPrice,

            profitAmount: (i.item.itemPrice - totalIngredCosting).toFixed(2),
            profitPercentage: (((i.item.itemPrice - totalIngredCosting) / totalIngredCosting) * 100).toFixed(2)
        }
    })

    return resultArray;
}