import { atom } from "recoil"
import { SelectedProductsType } from "types/products/selected-product"

const defaultState: SelectedProductsType = []

/**
 * Selected products (by IDs, not data).
 *
 * Initial state: Empty set.
 */
const selectedProductsState = atom({
  key: "selectedProductsState",
  default: defaultState,
})

export default selectedProductsState
