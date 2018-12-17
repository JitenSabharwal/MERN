import {
  ADD_USER_FAILURE,
  ADD_USER_SUCCESS,
  ADD_USER_REQUEST,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  SELECT_USER,
  DELETE_USER,
  DELETE_ALL_USERS
} from '../helpers/constants'

import {
  ADD_USER_ENDPOINT,
  UPDATE_USER_ENDPOINT,
  DELETE_USER_ENDPOINT,
  DELETE_ALL_USER_ENDPOINT
} from '../helpers/endpoints'

import { postRequest } from '../helpers/util'

function requestSent (payload, type) {
  return {
    type,
    isFetching: true,
    payload,
  }
}

function requestFailed (payload, type) {
  return {
    type,
    isFetching: true,
    payload,
  }
}

function requestSucess (payload, type) {
  return {
    type,
    isFetching: true,
    payload,
  }
}

function selectingUser (payload, type) {
  return {
    type,
    isFetching: false,
    payload,
  }
}
export const addUser = (data) => {
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestSent(data, ADD_USER_REQUEST))
    return postRequest(ADD_USER_ENDPOINT, data)
      .then(resp => {
        const { success, data, error } = resp.data
        if (!success) {
          // If there was a problem, we want to
          dispatch(requestFailed(error, ADD_USER_FAILURE))
          return Promise.reject(data)
        }
        dispatch(requestSucess(data, ADD_USER_SUCCESS))
      })
      .catch(err => console.log('Error: ', err))
  }
}

export const updateUser = (data, userId) => {
  // console.log(data)
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestSent(data, UPDATE_USER_REQUEST))
    return postRequest(`${UPDATE_USER_ENDPOINT}/${userId}`, data)
      .then(resp => {
        const { success, data, error } = resp.data
        if (!success) {
          // If there was a problem, we want to
          dispatch(requestFailed(error, UPDATE_USER_FAILURE))
          return Promise.reject(error)
        }
        dispatch(requestSucess(data, UPDATE_USER_SUCCESS))
      })
      .catch(err => console.log('Error: ', err))
  }
}

export const deleteUser = (userId) => {
  // console.log(data)
  return async (dispatch, getState) => {
    // We dispatch requestLogin to kickoff the call to the API
    const state = JSON.parse(JSON.stringify(getState()))
    const newUserList = state.user.list.filter(u => u._id !== userId)
    await postRequest(`${DELETE_USER_ENDPOINT}/${userId}`)
    dispatch(requestSucess(newUserList, DELETE_USER))
  }
}
export const deleteAllUsers = () => {
  return async dispatch => {
    await postRequest(`${DELETE_ALL_USER_ENDPOINT}`)
    dispatch(requestSucess([], DELETE_ALL_USERS))
  }
}
export const selectUser = (data) => {
  return dispatch => {
    dispatch(selectingUser(data, SELECT_USER))
  }
}
