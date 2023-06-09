/**
 * Selected products are defined by the required IDs.
 *
 * @todo Concept - Refactor data structure and code to use single unique ID for a specific item?
 */

interface RawSelectedProductType {
  categoryId: string
  productId: string
}

export type SelectedProductType = RawSelectedProductType
export type SelectedProductsType = [RawSelectedProductType?]

// eslint-disable-next-line import/no-anonymous-default-export
export default {}
