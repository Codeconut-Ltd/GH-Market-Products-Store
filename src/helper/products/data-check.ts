/**
 * Check if given data structure is an object and contains keys.
 */
const dataHasObjectKeys = (data: any): boolean => {
  const dataObj = typeof data === "object" ? data : {}
  const keys = Object.keys(dataObj).length

  return keys > 0
}

export default dataHasObjectKeys
