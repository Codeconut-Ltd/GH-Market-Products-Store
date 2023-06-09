import { selector } from "recoil"
import logging from "helper/logging"
import { getApiMethodUrl } from "helper/urls/api"
import getApiInstance from "services/api"

const url: string = getApiMethodUrl("orders")

/**
 * Get all products data (fetched by query).
 *
 * Initial state: Promise.
 *
 * @todo Optimize - Type safety
 */
const getOrders = selector({
  key: "getOrders",
  get: async (/* { get } */): Promise<any> => {
    return getApiInstance()
      .get(url)
      .then((response: any): any => {
        return response.data
      })
      .catch((error: string) => logging(error, "error"))
  },
})

export default getOrders
