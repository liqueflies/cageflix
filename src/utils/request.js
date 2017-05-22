import axios from 'axios'

/**
 * Get a fresh object with default options for axios
 *
 * @return {object} Returns default axios config
 */
function getDefaultOptions() {
  return {
    method: 'get',
    responseType: 'json',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatusThenData(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.data
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options = {}) {
  return axios(url, Object.assign(getDefaultOptions(), options))
    .then(checkStatusThenData)
}