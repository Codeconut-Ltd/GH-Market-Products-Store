import axios, { AxiosInstance } from "axios"
import urls from "config/urls"

/**
 * Open Axios instance for JSON API requests.
 *
 * @todo WIP - Implement .htpasswd basic auth
 */
const getApiInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: urls.api.base,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    /* * /
    withCredentials: true,
    auth: {
      username: "",
      password: "",
    },
    /* */
  })
}

export default getApiInstance
