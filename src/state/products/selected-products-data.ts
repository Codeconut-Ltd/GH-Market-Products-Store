import { selector } from "recoil"
import getTierPrice from "helper/prices/tier-price"
import getAllProductsQuery from "state/products/queries/get-all-products"
import selectedProductsState from "state/products/selected-products"
import ProductTypeFull from "types/products/product"
import { SelectedProductsType } from "types/products/selected-product"
import { SelectedProductDataType } from "types/products/selected-product-data"

/**
 * Selected products (by data, not IDs).
 * - Contains product data for display and saving.
 * - Calculates price depending on custom rules.
 *
 * Initial state: None (as no selection).
 *
 * @todo Optimize - Refactor function (too complex)
 */
const selectedProductsDataState = selector({
  key: "selectedProductsDataState",
  get: ({ get }): any[] => {
    const allProducts = get<ProductTypeFull>(getAllProductsQuery)
    const selectedProductsIds = get<SelectedProductsType>(selectedProductsState)
    let result: any[] = []

    if (!selectedProductsIds || !selectedProductsIds.length) {
      return []
    }

    for (const selectedProductIds of selectedProductsIds) {
      if (!selectedProductIds) {
        // Satisfy linting (error should never happen)
        throw new Error("Unexpected empty product")
      }

      let categoryId = selectedProductIds.categoryId
      let productId = selectedProductIds.productId

      const price = getTierPrice(selectedProductIds, selectedProductsIds, allProducts)

      result.push({
        categoryName: allProducts[categoryId].name,
        productName: allProducts[categoryId].productList[productId].name,
        price: price,
      } as SelectedProductDataType)
    }

    return result
  },
})

export default selectedProductsDataState
