import axios from 'axios'
import {ALL_USER_ENDPOINT} from './endpoints'
export const perpareHeader = () => {
  const id = localStorage.getItem('id_token')
  let config = {
    headers: {
      'Authorization': id ? `Bearer ${localStorage.getItem('id_token')}`: '',
    }
  }
  return config
}

export const postRequest = (url, payload) => {
  const headers = perpareHeader()
  return axios.post(url, payload, headers)
}

export const getRequest = (url, payload) => {
  const headers = perpareHeader()
  return axios.get(url, headers)
}

export const loadInitailState = () => {
  return new Promise((resolve, reject) => {
    getRequest(ALL_USER_ENDPOINT)
      .then(resp => {
        const {success, data} = resp.data
        if (!success) {
          // If there was a problem, we want to
          return reject(resp)
        } else {
          // If login was successful, set the token in local storage
          const state = {
            user: {
              list: data || []
            }
          }
          resolve(state)
        }
      })
      .catch(err => {
        console.log(err)
        reject("Error: ", err)
      })
  })
}
