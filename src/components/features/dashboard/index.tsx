import { useTranslation } from "react-i18next"
import OrdersTotalPrice from "components/features/orders-total-price"

/**
 * Dashboard.
 */
const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <>
      <div>
        <h1 className="mb-5">{t("components.dashboard.titlePrice")}</h1>
        <p>Total amount of all sales recorded.</p>
        <br />
        <h2 className="text-center display-1 bg-light py-5">
          <OrdersTotalPrice />
        </h2>
      </div>
    </>
  )
}

export default Dashboard
