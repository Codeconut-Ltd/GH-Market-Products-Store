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
      titlePrice: "Einnahmen Gesamtbestellungen:",
    },
    modal: {
      title: "Übersicht",
    },
    offcanvas: {
      title: "Kassensystem",
    },
    table: {
      header: {
        article: "Artikel",
        isFree: "Gratis?",
        price: "Preis",
        priceSet: "Set-Preis",
        delete: "Löschen",
      },
      messages: {
        empty: "Bitte zunächst ein Produkt wählen",
      },
    },
  },
  meta: {
    title: "Kassensystem",
  },
  pages: {
    error404: {
      title: "Seite nicht gefunden",
    },
  },
  ui: {
    buttons: {
      annulation: "Warenkorb leeren",
      cancel: "Beenden",
      cart: "Warenkorb",
      close: "Schließen",
      dashboard: "Dashboard",
      home: "Produkte",
      save: "Speichern",
    },
    messages: {
      cart: {
        selectProductHint: "Produkt wählen",
      },
    },
  },
}

export default language
