import getSelectedProductCategoryCount from "helper/products/product-category-count"
import { StringNumberObject } from "types/generics"
import ProductTypeFull from "types/products/product"
import { SelectedProductType, SelectedProductsType } from "types/products/selected-product"

/**
 * Only set new price if it is smaller than old (so array order does not matter)
 */
const getCalculatedTierPrice = (selectedProductIds, selectedProductData, selectedCategoryCounts): number => {
  const priceTier = selectedProductData.priceTier
  let newPrice = selectedProductData.price // Base price

  Object.entries(priceTier).map(([, priceConfig]: any) => {
    const categoryCount: number = selectedCategoryCounts[selectedProductIds.categoryId]

    if (categoryCount >= priceConfig.count) {
      newPrice = newPrice > priceConfig.price ? priceConfig.price : newPrice
    }

    // Unneeded
    return true
  })

  return newPrice
}

/**
 * @todo Concept - Make function generic to get item price (from ANY logic, e.g. free/gratis, ...)?
 */
const getTierPrice = (selectedProductIds: SelectedProductType, selectedProductsIds: SelectedProductsType, allProducts): number => {
  const selectedProductData: ProductTypeFull = allProducts[selectedProductIds.categoryId]
  const selectedCategoryCounts: StringNumberObject = getSelectedProductCategoryCount(selectedProductsIds)

  return getCalculatedTierPrice(selectedProductIds, selectedProductData, selectedCategoryCounts)
}

export default getTierPrice
