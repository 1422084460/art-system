import axios from 'axios'
import {URL} from '@/script/get.js'
import qs from 'qs'
import store from './store.js'

axios.defaults.timeout = 30000

axios.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json'
  config.headers['token'] = store.state.user.token
  config.data['timestamp'] = new Date().getTime()
  //config.data = JSON.stringify(config.data)
  //config.data = qs.stringify(config.data)
  return config
}, (error) => {
  return error
})

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return error
})

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = URL
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
        //resolve(response)
      }, err => {
        reject(err)
      })
  })
}
