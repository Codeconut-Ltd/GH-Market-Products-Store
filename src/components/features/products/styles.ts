import { Card } from "react-bootstrap"
import styled from "styled-components"

/**
 * Bootstrap 'Card' component: Container.
 *
 * Interactive styles as visual aid.
 */
export const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 0 0 1rem #ccc;
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0 1rem #aaa;
  }
`

/**
 * Bootstrap 'Card' component: Text.
 *
 * Force text height to an assumed amount max. of text lines.
 * Workaround for not being able to use the 'CardGroup' feature without heavy code restructuring.
 */
export const StyledCardText = styled(Card.Text)`
  --textLines: 2;

  height: calc(1.5rem * var(--textLines));
  padding-bottom: 1rem;
`

/**
 * Bootstrap 'Card' component: Image element.
 *
 * Make sure image size always fits, even if image itself is missing (404).
 */
export const StyledPicture = styled("picture")`
  img {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
  }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default {}
