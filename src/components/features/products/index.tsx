import Accordion from "react-bootstrap/Accordion"
import { useRecoilValue } from "recoil"
import ProductItems from "components/features/products/items"
import productsState from "state/products/products"
import { ProductTypeAny } from "types/products/product"

/**
 * Product categories.
 *
 * @todo Optimize - Type safety in Object.entries parameters
 */
const Products = () => {
  const products = useRecoilValue<ProductTypeAny>(productsState)

  return (
    <Accordion>
      {products &&
        Object.entries(products).map(([index, product]) => (
          <Accordion.Item key={`accordion-item-${index}`} eventKey={`accordion-item-${index}`}>
            <Accordion.Header className="user-select-none">{product.name}</Accordion.Header>
            <Accordion.Body className="px-0">
              <ProductItems parentProductId={index} products={product.productList} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  )
}

export default Products
