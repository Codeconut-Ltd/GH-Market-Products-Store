import { RecoilRoot } from "recoil"
import { HelmetProvider } from "react-helmet-async"
import { I18nextProvider } from "react-i18next"
import { Routes, Route } from "react-router-dom"
import Page404 from "components/pages/404"
import PageDashboard from "components/pages/dashboard"
import PageIndex from "components/pages/index"
import PageInfo from "components/pages/info"
import i18n from "languages/i18n"

/**
 * Global state, languages, routing, meta tags.
 * Nesting/Ordering is arbitrary decision, but it's suggested to just keep it this way.
 */
const App = (): any => {
  return (
    <RecoilRoot>
      <I18nextProvider i18n={i18n}>
        <HelmetProvider>
          <Routes>
            <Route index element={<PageIndex />}></Route>
            <Route path="dashboard" element={<PageDashboard />}></Route>
            <Route path="info" element={<PageInfo />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </HelmetProvider>
      </I18nextProvider>
    </RecoilRoot>
  )
}

export default App
