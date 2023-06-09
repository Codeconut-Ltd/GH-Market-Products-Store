import { selector } from "recoil"
import getTotalPrice from "state/prices/queries/get-total-price"
import { ProductTypeAny } from "types/products/product"

/**
 * Total price of all orders
 *
 * Initial state: None until query has completed.
 */
const totalPriceState = selector({
  key: "totalPriceState",
  get: ({ get }): {} | ProductTypeAny => {
    return get<ProductTypeAny>(getTotalPrice)
  },
})

export default totalPriceState
