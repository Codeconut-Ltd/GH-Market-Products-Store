import { selector } from "recoil"
import getAllProductsQuery from "state/products/queries/get-all-products"
import { ProductTypeAny } from "types/products/product"

/**
 * Filter products to return active only.
 */
const getActiveProducts = (allProducts: ProductTypeAny): ProductTypeAny => {
  const productsArray: any = Object.entries(allProducts)
  const productsFiltered = productsArray.filter(([_index, element]) => {
    return !!element.active
  })

  return Object.fromEntries(productsFiltered)
}

/**
 * Contains state of all products from API query.
 *
 * Initial state: None until query has completed.
 */
const productsState = selector({
  key: "productsState",
  get: ({ get }): {} | ProductTypeAny => {
    const rawProducts = get<ProductTypeAny>(getAllProductsQuery)
    const products = !!rawProducts === false ? {} : rawProducts

    return getActiveProducts(products)
  },
})

export default productsState
