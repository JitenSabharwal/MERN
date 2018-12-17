import axios from 'axios'
import {ALL_USER_ENDPOINT} from './endpoints'
export const perpareHeader = () => {
  const id = localStorage.getItem('id_token')
  const config = {
    headers: {
      'Authorization': id ? `Bearer ${id}` : '',
    },
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
/**
 *
 * @param {array} data [{id: 'redquired', ...user properties}]
 * @param {*} val
 * @param {string} key If not _id any other prop
 */
export const findUser = (data, val, key = '_id') => {
  return data.filter(u => u[key] === val)
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
              list: data || [],
            },
          }
          resolve(state)
        }
      })
      .catch(err => {
        console.log(err)
        reject(new Error('Error: ', err))
      })
  })
}
