// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
//   LOGOUT_SUCCESS
// } from '../helpers/constants'

const initialState = {
  isFetching: false,
  isuserenticated: localStorage.getItem('id_token') ? true : false
}

function user(state = initialState, action) {
  return state
  // switch (action.type) {
  //   case LOGIN_REQUEST: return Object.assign({}, state, {
  //     isFetching: true,
  //     isuserenticated: false,
  //     user: action.creds
  //   })

  //   case LOGIN_SUCCESS: return Object.assign({}, state, {
  //     isFetching: false,
  //     isuserenticated: true,
  //     errorMessage: action.message
  //   })

  //   case LOGIN_FAILURE:
  //     return Object.assign({}, state, {
  //       isFetching: false,
  //       isuserenticated: false,
  //       errorMessage: action.message
  //     })

  //   case LOGOUT_SUCCESS:
  //     return Object.assign({}, state, {
  //       isFetching: true,
  //       isuserenticated: false
  //     })

  //   default:
  //     return state
  // }
}
export default user