import { ProductTypeAny } from "types/products/product"

/**
 * Product item display.
 */
interface RawProductItemProps {
  onClick: any // function
  name: string
  img?: string
}

/**
 * Product items (list) display.
 */
interface RawProductItemsProps {
  parentProductId: string
  products: ProductTypeAny[]
}

export type ProductItemProps = RawProductItemProps
export type ProductItemsProps = RawProductItemsProps

// eslint-disable-next-line import/no-anonymous-default-export
export default {}
