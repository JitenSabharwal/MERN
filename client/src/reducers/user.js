import {
  ADD_USER_FAILURE,
  ADD_USER_SUCCESS,
  ADD_USER_REQUEST,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  SELECT_USER,
} from '../helpers/constants'

const initialState = {
  isFetching: false,
  isEditing: false,
  list: []
}

function user(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_REQUEST: return Object.assign({}, state, {
      isFetching: true,
      user: action.payload
    })

    case ADD_USER_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      list: [
        ...state.user.list,
        action.payload
      ]
    })

    case ADD_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.errorMessage
      })

    case UPDATE_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.errorMessage
      })
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.payload
      })
    case UPDATE_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case SELECT_USER : 
    return Object.assign({}, state, {
      isFetching: false,
      selected: action.payload
    })
    default:
      return state
  }
}
export default user