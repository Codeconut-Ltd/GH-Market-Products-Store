import { StringNumberObject } from "types/generics"
import { SelectedProductType, SelectedProductsType } from "types/products/selected-product"

/**
 * @todo Optimize - Type safety annotations for 'SelectedProductType'
 */
const getSelectedProductCategoryCount = (selectedProductsIds: SelectedProductsType): StringNumberObject => {
  return Object.entries(selectedProductsIds).reduce((idCount, productIds) => {
    const [, ids]: [string, any | SelectedProductType] = productIds
    const id: string = ids.categoryId

    if (!ids.categoryId) {
      // Helps to avoid potentially hard to detect bugs
      throw new Error("Unexpected data structure in 'productIds'")
    }

    if (idCount[id] === undefined) {
      idCount[id] = 1
    } else {
      idCount[id]++
    }

    return idCount
  }, {} as StringNumberObject)
}

export default getSelectedProductCategoryCount
