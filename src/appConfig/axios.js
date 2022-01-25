import axios from 'axios/index.js'
import store from './store'

const axiosInstance = axios.create({ baseURL: process.env.API_URL })

axiosInstance.interceptors.request.use((config) => {
  const token = store.state.token
  if (token != null) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

export default (Vue) => {
  Object.defineProperties(Vue.prototype, {
    $http: {
      get: () => axiosInstance
    }
  })
}
