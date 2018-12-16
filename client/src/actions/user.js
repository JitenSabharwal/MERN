import {
  ADD_USER_FAILURE,
  ADD_USER_SUCCESS,
  ADD_USER_REQUEST,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  SELECT_USER,
} from '../helpers/constants'

import {ADD_USER_ENDPOINT, UPDATE_USER_ENDPOINT} from '../helpers/endpoints'

import { postRequest } from '../helpers/util'

function requestSent(payload, type) {
  return {
    type,
    isFetching: true,
    payload
  }
}

function requestFailed(payload, type) {
  return {
    type,
    isFetching: true,
    payload
  }
}

function requestSucess(payload, type) {
  return {
    type,
    isFetching: true,
    payload
  }
}

function selectingUser(payload, type) {
  return {
    type,
    isFetching: false,
    payload
  }
}
export const addUser = (data) => {
    return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestSent(data, ADD_USER_REQUEST))
    return postRequest(ADD_USER_ENDPOINT, data)
      .then(resp => {
        const response = resp.data
        const user = response
        if (!response.ok) {
          // If there was a problem, we want to
          dispatch(requestFailed(user.message, ADD_USER_FAILURE))
          return Promise.reject(user)
        } else {
          const {data} = user
          requestSucess(data, ADD_USER_SUCCESS)
        }
      })
      .catch(err => console.log("Error: ", err))
  }
}

export const updateUser = (data) => {
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestSent(data, UPDATE_USER_REQUEST))
    return postRequest(UPDATE_USER_ENDPOINT, data)
      .then(resp => {
        const response = resp.data
        const user = response
        if (!response.ok) {
          // If there was a problem, we want to
          dispatch(requestFailed(user.message, UPDATE_USER_FAILURE))
          return Promise.reject(user)
        } else {
          const {data} = user
          requestSucess(data, UPDATE_USER_SUCCESS)
        }
      })
      .catch(err => console.log("Error: ", err))
  }
}

export const selectUser = (data) => {
  return dispatch => {
    console.log(data)
    dispatch(selectingUser(data, SELECT_USER))
  }
}