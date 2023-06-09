import { Card, Col, Container, Row } from "react-bootstrap"
import { useRecoilState } from "recoil"
import selectedProductsState from "state/products/selected-products"
import { ProductItemProps, ProductItemsProps } from "types/components/product-items"
import { SelectedProductType } from "types/products/selected-product"
import { StyledCard, StyledCardText, StyledPicture } from "./styles"

/**
 * Product item.
 *
 * @todo Concept - Should image be checked for 404 status?
 */
const ProductItem = ({ onClick, name, img }: ProductItemProps) => {
  const imgSrc: string = img ?? "images/products/_placeholder.png"

  return (
    <StyledCard onClick={onClick} className="mb-4">
      <StyledPicture>
        <source src={imgSrc} />
        <img src={imgSrc} alt={name} loading="lazy" />
      </StyledPicture>
      <Card.Body>
        <StyledCardText>{name}</StyledCardText>
      </Card.Body>
    </StyledCard>
  )
}

/**
 * Product items.
 *
 * @todo Optimize - Use 'id' fields of product (once structure is adjusted)
 */
const ProductItems = (props: ProductItemsProps) => {
  const { parentProductId, products } = props
  const [, addProduct] = useRecoilState<any>(selectedProductsState)

  const selectProduct = (productId: string) => {
    addProduct((previousState: [any]) => [
      ...previousState,
      {
        categoryId: parentProductId,
        productId: productId,
      } as SelectedProductType,
    ])
  }

  return (
    <>
      <Container fluid>
        <Row>
          {products &&
            Object.entries(products).map((element: any, index: number) => (
              <Col xs={6} md={4} lg={3} key={element[0] + "-" + index}>
                <ProductItem name={element[1].name} img={element[1].img} onClick={() => selectProduct(element[0])} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  )
}

export default ProductItems
