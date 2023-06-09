import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from "reportWebVitals"
import App from "components/app"
import { getPublicUrl } from "helper/urls/env"

import "styles/index.scss"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={getPublicUrl()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
)

/**
 * If you want to start measuring performance in your app, pass a function to log results
 * (for example: reportWebVitals(console.log)) or send to an analytics endpoint.
 *
 * @see https://bit.ly/CRA-vitals
 */
reportWebVitals()
