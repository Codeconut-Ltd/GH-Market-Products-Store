import logging from "helper/logging"
import { getApiMethodUrl } from "helper/urls/api"
import getApiInstance from "services/api"
import mapSelectedProductsToApi from "helper/products/map-api"
import { SelectedOrEmptyProductsDataType } from "types/products/selected-product-data"

const url: string = getApiMethodUrl("products")

/**
 * API request: Save product data in database.
 */
const saveProducts = (productData: SelectedOrEmptyProductsDataType): Promise<any> => {
  const dataFormatted = {
    ...mapSelectedProductsToApi(productData),
  }

  const data: string = JSON.stringify(dataFormatted)

  return getApiInstance()
    .post(url, data)
    .then((_productsResponse: any): [any] => {
      return _productsResponse.data
    })
    .catch((error: string) => {
      logging(error, "error")
      throw error
    })
}

export default saveProducts
