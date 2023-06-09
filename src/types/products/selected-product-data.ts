/**
 * Algorithm and display data for calculations and frontend display.
 *
 * This might differ from the full data set and is not necessarily
 * the same as used for APIs (e.g. to save data in DB).
 */

interface RawSelectedProductDataType {
  categoryName: string
  productName: string
  price: number
}

export type SelectedProductDataType = RawSelectedProductDataType
export type SelectedProductsDataType = RawSelectedProductDataType[]
export type SelectedOrEmptyProductsDataType = RawSelectedProductDataType[] | []

// eslint-disable-next-line import/no-anonymous-default-export
export default {}
