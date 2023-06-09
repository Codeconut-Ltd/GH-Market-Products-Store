import getEnvVar from "helper/environment"
import LogModes from "types/log-modes"

/**
 * Log/Alert depending on environment.
 * For anything non-dev, alert() is chosen, so messages are not hidden when there is no console available.
 */
const logging = (message: any, mode: LogModes) => {
  const env: string = getEnvVar("REACT_APP_ENV")

  if (env !== "DEV") {
    console[mode](message)
  } else {
    alert(`${mode.toUpperCase()}: ${message}`)
  }
}

export default logging
