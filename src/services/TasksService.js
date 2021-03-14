import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/mamc003/MyJSONServer',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTasks () {
    return apiClient.get('/tasks')
  },
  getTask (id) {
    return apiClient.get('/tasks/' + id)
  }
}
