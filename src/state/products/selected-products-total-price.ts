import { selector } from "recoil"
import roundPrice from "helper/prices/round-price"
import selectedProductsDataState from "state/products/selected-products-data"
import { SelectedProductDataType, SelectedOrEmptyProductsDataType } from "types/products/selected-product-data"

/**
 * Calculate total price of selected products.
 * Simply sums up prices of selected products, as any custom calculations are done in another place.
 *
 * Initial state: Zero sum.
 */
const selectedProductsTotalPriceState = selector({
  key: "selectedProductsTotalPriceState",
  get: ({ get }): number => {
    const selectedProductsData: SelectedOrEmptyProductsDataType = get(selectedProductsDataState)

    let price = Object.entries(selectedProductsData).reduce((acc, val) => {
      const [, product]: [string, any | SelectedProductDataType] = val

      return (acc += product.price)
    }, 0)

    return roundPrice(price)
  },
})

export default selectedProductsTotalPriceState
