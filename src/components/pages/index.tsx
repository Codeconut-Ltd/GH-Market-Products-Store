import { Suspense } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import Header from "components/layout/header"
import Main from "components/layout/main"
import ModalOverview from "components/features/modal-overview"
import Products from "components/features/products"

/**
 * Index page.
 */
const PageIndex = (): any => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("meta.title")}</title>
      </Helmet>
      <Suspense fallback={<></>}>
        <Header pageId="index" />
      </Suspense>
      <Main>
        <Suspense fallback={<></>}>
          <Products />
        </Suspense>
      </Main>
      <Suspense fallback={<></>}>
        <ModalOverview />
      </Suspense>
    </>
  )
}

export default PageIndex
