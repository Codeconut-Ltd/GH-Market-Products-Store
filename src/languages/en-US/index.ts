/**
 * UI and content translations.
 *
 * TOC
 * - Components
 * - Meta (Tags)
 * - Pages
 * - UI (Global)
 *
 * @todo WIP - Finish page re-structuring (consistent names)
 */
const language = {
  components: {
    dashboard: {
      titlePrice: "Revenue – Total orders",
    },
    modal: {
      title: "Overview",
    },
    offcanvas: {
      title: "Market Products Store",
    },
    table: {
      header: {
        article: "Article",
        isFree: "Free?",
        price: "Price",
        priceSet: "Set price",
        delete: "Delete",
      },
      messages: {
        empty: "Please choose a product first",
      },
    },
  },
  meta: {
    title: "Market Products Store",
  },
  pages: {
    error404: {
      title: "Page not found",
    },
  },
  ui: {
    buttons: {
      annulation: "Empty cart",
      cancel: "Cancel",
      cart: "Cart",
      close: "Close",
      dashboard: "Dashboard",
      home: "Products",
      info: "INFO (ABOUT)",
      save: "Save",
    },
    messages: {
      cart: {
        selectProductHint: "Choose product",
      },
    },
  },
}

export default language
