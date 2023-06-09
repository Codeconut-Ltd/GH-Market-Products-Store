import { SelectedProductDataType, SelectedProductsDataType, SelectedOrEmptyProductsDataType } from "types/products/selected-product-data"

/**
 * Map selected products to API compatible data structure.
 */
const mapSelectedProductsToApi = (productData: SelectedOrEmptyProductsDataType) => {
  let result: SelectedProductsDataType = []

  for (const product of productData) {
    result.push({
      categoryName: product.categoryName,
      productName: product.productName,
      price: product.price,
    } as SelectedProductDataType)
  }

  return result
}

export default mapSelectedProductsToApi
