import axios from 'axios'

const getAll = (baseUrl) => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (baseUrl, newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (baseUrl, id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update };