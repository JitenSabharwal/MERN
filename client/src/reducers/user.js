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

const initialState = {
  isFetching: false,
  isEditing: false,
  list: [],
}

/**
 * Fucntion is the User reducer
 * It is responsible for returning a new user state
 * @param {object} state
 * @param {object} action
 */
function user (state = initialState, action) {
  switch (action.type) {
    case ADD_USER_REQUEST: return Object.assign({}, state, {
      isFetching: true,
    })

    case ADD_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: [
          ...state.list,
          action.payload,
        ],
      })

    case ADD_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.errorMessage,
      })

    case UPDATE_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.errorMessage,
      })
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.payload,
      })
    case UPDATE_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case SELECT_USER :
      return Object.assign({}, state, {
        isFetching: false,
        selected: action.payload,
      })
    case DELETE_USER :
      return Object.assign({}, state, {
        isFetching: false,
        selected: {},
        list: action.payload,
      })
    case DELETE_ALL_USERS :
      return Object.assign({}, state, {
        isFetching: false,
        selected: {},
        list: [],
      })
    default:
      return state
  }
}
export default user
