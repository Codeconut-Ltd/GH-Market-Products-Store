import { Button, Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import ModalOverviewProductDetails from "components/features/modal-overview/details"
import saveProducts from "services/database"
import modalOpenState from "state/modal-open"
import selectedProductsState from "state/products/selected-products"
import selectedProductsDataState from "state/products/selected-products-data"
import { SelectedOrEmptyProductsDataType } from "types/products/selected-product-data"

/**
 * Modal overview with layout segments.
 *
 * @todo Optimize - Create custom hook for complex reset logic?
 * @todo Concept - Communicate buttons only being usable if products exist
 */
const ModalOverview = () => {
  const { t } = useTranslation()

  const [show, setIsOpen] = useRecoilState(modalOpenState)
  const selectedProductsData = useRecoilValue<SelectedOrEmptyProductsDataType>(selectedProductsDataState)

  const setResetSelectedProducts = useSetRecoilState<any>(selectedProductsState)
  const resetSelectedProducts = () => setResetSelectedProducts((_previousState) => [])

  const closeModal = () => setIsOpen(false)

  const saveChanges = () => {
    saveProducts(selectedProductsData)
    resetSelectedProducts()
    setIsOpen(false)
  }

  return (
    <Modal scrollable size={"xl"} show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{t("components.modal.title")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalOverviewProductDetails />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          {t("ui.buttons.close")}
        </Button>
        <Button variant="primary" onClick={saveChanges} disabled={selectedProductsData.length ? false : true}>
          {t("ui.buttons.save")}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalOverview
