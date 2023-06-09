import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import Main from "components/layout/main"

/**
 * 404 error page.
 */
const Page404 = (): any => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("meta.title")}</title>
      </Helmet>
      <Main>
        <h1 className="text-center">{t("pages.error404.title")}</h1>
      </Main>
    </>
  )
}

export default Page404
