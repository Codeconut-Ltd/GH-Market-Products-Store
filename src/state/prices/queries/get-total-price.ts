import Recoil, { atom, selector } from "recoil"
import logging from "helper/logging"
import { getApiMethodUrl } from "helper/urls/api"
import getApiInstance from "services/api"

const url: string = getApiMethodUrl("price")

/**
 * Cache-busting workaround to fetch fresh results on every call.
 *
 * @see https://github.com/facebookexperimental/Recoil/issues/85
 */
const totalPriceTrigger = atom({
  key: "totalPriceTrigger",
  default: 0,
})

/**
 * Get total price (of all orders).
 *
 * Initial state: Promise.
 *
 * @todo WIP - Update on call (every time)
 * @todo Optimize - Type safety
 * @todo Concept - Decide on app structure/grouping
 */
const getTotalPrice = selector({
  key: "getTotalPrice",
  get: async ({ get }): Promise<any> => {
    get(totalPriceTrigger)

    return getApiInstance()
      .get(url)
      .then((response: any): number => {
        return response.data.sum
      })
      .catch((error: string) => logging(error, "error"))
  },
  set: ({ set }, val: any) => {
    if (val instanceof Recoil.DefaultValue) {
      set(totalPriceTrigger, (count: number) => count + 1)
    }
  },
})

export default getTotalPrice
