import { CSSProperties } from "react"
import { Table } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { useRecoilState, useRecoilValue } from "recoil"
import formatPrice from "helper/prices/format-price"
import selectedProductsState from "state/products/selected-products"
import selectedProductsDataState from "state/products/selected-products-data"
import selectedProductsTotalPriceState from "state/products/selected-products-total-price"
import { SelectedOrEmptyProductsDataType } from "types/products/selected-product-data"

const style: CSSProperties = {
  textAlign: "center",
}

/**
 * Modal segment of product details.
 *
 * @todo Optimize - Accordion instead table - Refactor
 * @todo Optimize - State management - Outsource
 */
const ModalOverviewProductDetails = () => {
  const { t } = useTranslation()

  const totalPrice = useRecoilValue(selectedProductsTotalPriceState)
  const [, removeProduct] = useRecoilState<any>(selectedProductsState)
  const selectedProductsData = useRecoilValue<SelectedOrEmptyProductsDataType>(selectedProductsDataState)

  const deleteProductFromList = (index: number) => {
    removeProduct((previousState) => {
      const newState = [...previousState]

      newState.splice(index, 1)

      return newState
    })
  }

  return (
    <Table hover responsive striped>
      <thead>
        <tr>
          <th scope="col">{t("components.table.header.article")}</th>
          {/* * / }
          <th scope="col">{t("components.table.header.isFree")}</th>
          { /* */}
          <th scope="col">{t("components.table.header.price")}</th>
          <th style={style} scope="col">
            {t("components.table.header.delete")}
          </th>
        </tr>
      </thead>
      <tbody>
        {(!selectedProductsData || !selectedProductsData.length) && (
          <tr>
            <td colSpan={4}>{t("components.table.messages.empty")}</td>
          </tr>
        )}

        {selectedProductsData &&
          Object.entries(selectedProductsData).map(([index, product]: any) => (
            <tr key={`selected-product-${index}`}>
              <td>
                {product.categoryName} - {product.productName}
              </td>
              {/* * / }
              <td className="align-middle text-nowrap">
                <Form.Check type="switch" title="Free?" label="" className="mt-2" />
              </td>
              { /* */}
              <td className="text-nowrap">{formatPrice(product.price)}</td>
              <td className="align-middle text-center">
                <button className="btn-close" aria-label="Delete from list" onClick={() => deleteProductFromList(+index)}></button>
              </td>
            </tr>
          ))}

        {selectedProductsData && (
          <tr className="table-info">
            <td>
              <strong>TOTAL</strong>
            </td>
            <td>
              <strong>{formatPrice(totalPrice)}</strong>
            </td>
            <td>&nbsp;</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default ModalOverviewProductDetails
