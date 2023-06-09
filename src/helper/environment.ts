/**
 * Get any environment variable from system or throw error.
 */
const getEnvVar = (variable: string): string => {
  if (process.env[variable] === undefined) {
    throw new Error(`Variable ${variable} not defined`)
  }

  return process.env[variable] ?? ""
}

/**
 * Get application environment or throw error.
 *
 * @todo Optimize - Types not as strings?
 */
const getAppEnv = (): "DEV" | "LIVE" => {
  const env: string = getEnvVar("REACT_APP_ENV")

  if (env !== "DEV" && env !== "LIVE") {
    throw new Error(`Value of 'REACT_APP_ENV' unsupported ${env}`)
  }

  return env
}

export { getAppEnv }
export default getEnvVar
