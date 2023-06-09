import { Suspense } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import Dashboard from "components/features/dashboard"
import Header from "components/layout/header"
import Main from "components/layout/main"

/**
 * Dashboard view page.
 */
const PageDashboard = (): any => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("meta.title")}</title>
      </Helmet>
      <Suspense fallback={<></>}>
        <Header />
      </Suspense>
      <Main>
        <Suspense fallback={<></>}>
          <Dashboard />
        </Suspense>
      </Main>
    </>
  )
}

export default PageDashboard
