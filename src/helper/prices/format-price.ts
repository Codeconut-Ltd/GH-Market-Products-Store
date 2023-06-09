import globals from "config/globals"

const currency: string = globals.locale.currency
const locale: string = globals.locale.langCode

/**
 * Format price text according to locale.
 */
const formatPrice = (price: number): string => {
  return price.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  })
}

export default formatPrice
