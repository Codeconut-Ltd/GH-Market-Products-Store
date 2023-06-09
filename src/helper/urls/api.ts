import urls from "config/urls"

/**
 * Get API method url (parameter).
 * Parameter is used to distinct functionality.
 *
 * @see getApiInstance Base URL is not needed here, as it's defined by the API service.
 */
const getApiMethodUrl = (method: string): string => {
  const apiMethod: string = urls.api.methods[method]
  const url: string = `?method=${apiMethod}`

  if (!apiMethod) {
    throw new Error(`API method does not exist: '${apiMethod}'`)
  }

  return url
}

export { getApiMethodUrl }

// eslint-disable-next-line import/no-anonymous-default-export
export default {}
