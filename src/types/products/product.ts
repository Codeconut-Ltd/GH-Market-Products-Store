/**
 * Product category and products within it.
 *
 * @todo WIP - Remove 'price' attribute?
 */

interface RawProductTypeFullList {
  [index: string]: ProductTypeFull
}

interface RawProductListItemType {
  name: string
  img?: string
}

interface RawProductListType {
  [index: string]: RawProductListItemType
}

interface ProductTypeFull {
  name: string
  sortId: number // int
  price: number
  priceTier: {
    count: number
    price: number
  }[]
  productList: RawProductListType
}

export type ProductTypeFullList = RawProductTypeFullList
export type ProductTypeEmpty = {}
export type ProductTypeAny = ProductTypeFull | ProductTypeEmpty

export default ProductTypeFull
