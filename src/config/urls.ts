import { getApiUrl, getPublicUrl } from "helper/urls/env"

/**
 * Centralized management of URL paths or parts.
 * Environment based or hardcoded as needed.
 *
 * API specific
 * - Paths are relative to their base folder defined by environment.
 * - Methods: Query parameters to append to base URL.
 */
const urls: any = {
  base: getPublicUrl() ?? "/",
  api: {
    base: getApiUrl(),
    methods: {
      orders: "orders",
      price: "price",
      products: "products",
    },
    data: {
      products: "data/products.json",
    },
  },
  pages: {
    dashboard: "/dashboard",
    info: "/info",
    home: "/",
  },
}

export default urls
