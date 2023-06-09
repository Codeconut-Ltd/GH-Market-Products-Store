import { selector } from "recoil"
import urls from "config/urls"
import logging from "helper/logging"
import getApiInstance from "services/api"
import { ProductTypeFullList } from "types/products/product"

const url: string = urls.api.data.products

/**
 * Get all products data (fetched by query).
 *
 * Initial state: Promise.
 *
 * @todo Optimize - Product type check and annotation
 */
const getAllProductsQuery = selector({
  key: "getAllProductsQuery",
  get: async (/* { get } */): Promise<any> => {
    return getApiInstance()
      .get(url)
      .then((response: any): ProductTypeFullList | any => {
        return response.data
      })
      .catch((error: string) => logging(error, "error"))
  },
})

export default getAllProductsQuery
