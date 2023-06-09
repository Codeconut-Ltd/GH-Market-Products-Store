import { selector } from "recoil"
import getOrders from "state/orders/queries/get-orders"

/**
 * Contains state of all orders from API query.
 *
 * Initial state: None until query has completed.
 *
 * @todo WIP - Remove debug
 * @todo Optimize - Type safety
 */
const ordersState = selector({
  key: "ordersState",
  get: ({ get }): any => {
    return get<any>(getOrders)
  },
})

export default ordersState
