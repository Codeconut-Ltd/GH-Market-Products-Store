import { useState } from "react"
import { Badge, Button, ListGroup, Nav, Offcanvas } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { useSetRecoilState, useRecoilValue } from "recoil"
import urls from "config/urls"
import formatPrice from "helper/prices/format-price"
import modalOpenState from "state/modal-open"
import selectedProductsState from "state/products/selected-products"
import selectedProductsTotalPriceState from "state/products/selected-products-total-price"
import { StyledNavbar } from "./styles"
import { FaAngleRight } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"

interface HeaderProps {
  pageId?: string
}

/**
 * Header layout segment.
 *
 * @todo WIP - Implement/Remove offcanvas
 * @todo Optimize - showPage() - Change type (don't use string)
 * @todo Optimize - Split component into smaller parts (separate modal from product reset)
 * @todo Optimize - Create custom hook for complex reset logic
 */
const Header = (props: HeaderProps) => {
  const { pageId } = props
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const selectedProducts = useRecoilValue<any[]>(selectedProductsState)
  const totalPrice = useRecoilValue(selectedProductsTotalPriceState)
  const hasProductsSelected = selectedProducts && selectedProducts.length

  const setModalOpen = useSetRecoilState(modalOpenState)
  const openModal = () => setModalOpen((_previousState) => true)
  const showPage = (page: string) => {
    const url = urls.pages[page]

    if (!url) {
      throw new Error(`URL does not exist: ${url}`)
    }

    navigate(urls.pages[page])
  }

  const setResetSelectedProducts = useSetRecoilState<any>(selectedProductsState)
  const resetSelectedProducts = () => setResetSelectedProducts((_previousState) => [])

  return (
    <StyledNavbar
      as="header"
      expand={false}
      className="sticky-top d-flex flex-column flex-md-row align-items-center justify-content-between px-5 py-2"
    >
      <ListGroup>
        <ListGroup.Item className="d-flex align-items-center justify-content-between mb-3 mb-md-0 user-select-none">
          <span className="h4 me-3 mb-0">{formatPrice(totalPrice)}</span>
          <span className="badge bg-primary rounded-pill">{selectedProducts.length}</span>
        </ListGroup.Item>
      </ListGroup>
      <Nav className="flex-row gap-3">
        {pageId && pageId === "index" && (
          <Button variant="primary" onClick={openModal} disabled={hasProductsSelected ? false : true}>
            {t("ui.buttons.cart")}
          </Button>
        )}
        <Button variant="secondary" onClick={handleShow} className="d-flex align-items-center">
          <FiMenu className="" />
        </Button>
      </Nav>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t("components.offcanvas.title")}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup className="mb-5">
            <ListGroup.Item action onClick={() => showPage("home")} className="d-flex align-items-center">
              <div className="w-100">{t("ui.buttons.home")}</div>
              <FaAngleRight className="mb-1 align-self-end" />
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => showPage("dashboard")} className="d-flex align-items-center">
              <div className="w-100">{t("ui.buttons.dashboard")}</div>
              <FaAngleRight className="mb-1 align-self-end" />
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => showPage("info")} className="d-flex align-items-center">
              <div className="w-100">{t("ui.buttons.info")}</div>
              <FaAngleRight className="mb-1 align-self-end" />
            </ListGroup.Item>
            <ListGroup.Item
              action
              onClick={openModal}
              disabled={hasProductsSelected ? false : true}
              className="d-flex justify-content-between align-items-center"
            >
              {t("ui.buttons.cart")} {!selectedProducts.length ? `(${t("ui.messages.cart.selectProductHint")})` : ""}
              <Badge bg="primary" pill>
                {selectedProducts.length}
              </Badge>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item action onClick={resetSelectedProducts} disabled={hasProductsSelected ? false : true}>
              {t("ui.buttons.annulation")}
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </StyledNavbar>
  )
}

export default Header
