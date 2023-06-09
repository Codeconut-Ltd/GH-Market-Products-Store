import getEnvVar from "helper/environment"

/**
 * Get API url depending on environment.
 *
 * Throw error if none is found.
 */
const getApiUrl = (): string => {
  const url: string | undefined = getEnvVar("REACT_APP_API_URL")

  if (!url) {
    throw new Error("Environment variable 'REACT_APP_API_URL' is not defined")
  }

  return url
}

/**
 * Get public path URL for React.
 *
 * React internal: Paths of '/' can become '' on local/DEV environment.
 */
const getPublicUrl = (): string => {
  const url: string | undefined = getEnvVar("PUBLIC_URL")

  return url
}

export { getApiUrl, getPublicUrl }

// eslint-disable-next-line import/no-anonymous-default-export
export default {}
