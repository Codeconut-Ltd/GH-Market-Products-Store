import { Suspense } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import Header from "components/layout/header"
import Main from "components/layout/main"

/**
 * Info page.
 */
const PageInfo = (): any => {
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
        <h1 className="mb-5">Live demo</h1>
        <p>
          This proof-of-concept app is created for a friend to use as aid when selling decorative products on markets. The application is
          run on a smartphone and can track sales, incomes and most important; the time of sale. This helps to optimize costs of being
          present at markets in favourable times only, and otherwise investing time in higher yield work to be done.
        </p>
        <p>
          It's in a early, conceptual MVP phase. Primary goals are to maximize UI interaction speed and implement custom price modelling for
          custom offers or discounts. This version of the application is anonymized and intended as technical/ skill demonstration.
        </p>
        <br />
        <h2 className="mb-5">Tech stack</h2>
        <h3>Important</h3>
        <ul>
          <li>React v17</li>
          <li>Axios</li>
          <li>Bootstrap</li>
          <li>Recoil</li>
          <li>i18next</li>
          <li>Styled Components</li>
          <li>PropTypes</li>
          <li>Helmet</li>
          <li>Router DOM</li>
        </ul>
        <h3>Details</h3>
        <ul>
          <li>TypeScript</li>
          <li>EsLint</li>
          <li>Prettier</li>
          <li>DomPurify</li>
        </ul>
        <h2 className="my-5">Author</h2>
        <p className="mb-5">
          © 2023 Christian Oellers –{" "}
          <a href="https://www.codeconut.io/" target="_blank" rel="noopener noreferrer">
            Codeconut Ltd.
          </a>
        </p>
      </Main>
    </>
  )
}

export default PageInfo
