export const ADD_USER_REQUEST = 'ADD_USER_REQUEST'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE'
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'
export const DELETE_USER = 'DELETE_USER'
export const DELETE_ALL_USERS = 'DELETE_ALL_USERS'
export const SELECT_USER = 'SELECT_USER'
export const USER_TABLE_HEADS = [
  { id: 'firstName', numeric: false, disablePadding: true, label: 'FirstName' },
  { id: 'lastName', numeric: false, disablePadding: false, label: 'LastName' },
  { id: 'hobbies', numeric: false, disablePadding: false, label: 'Hobbies' },
  { id: 'birthDate', numeric: false, disablePadding: false, label: 'BirthDate' },
  { id: 'url', numeric: false, disablePadding: false, label: 'Profile' },
]
export const DEFAULT_URL = '/uploads/default.jpeg'
export const MAX_LENGTH = 30
export const NAME_REGEX = /^[a-zA-Z ]{2,30}$/
