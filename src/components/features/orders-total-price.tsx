import { useEffect } from "react"
import { useRecoilValue, useResetRecoilState } from "recoil"
import formatPrice from "helper/prices/format-price"
import totalPriceState from "state/prices/total-price"
import getTotalPrice from "state/prices/queries/get-total-price"

/**
 * Total price of all orders.
 *
 * 1) Cache-busting workaround to fetch fresh results on every render.
 */
const OrdersTotalPrice = () => {
  const totalPrice: number = useRecoilValue<any>(totalPriceState)
  const resetTotalPrice: any = useResetRecoilState(getTotalPrice)

  // 1)
  useEffect(() => {
    resetTotalPrice()
  }, [resetTotalPrice])

  return <>{formatPrice(totalPrice)}</>
}

export default OrdersTotalPrice
