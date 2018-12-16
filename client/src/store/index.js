import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadInitailState } from '../helpers/util'
const middleware = [thunk, logger]

const initialState = {}
// export default store
export const configureStoreAsync = () => {
  return loadInitailState()
    .then((initialStoreState) => {
      const store = createStore(
        rootReducer,
        initialStoreState,
        composeWithDevTools(applyMiddleware(...middleware))
      )
      return store
    })
    .catch((error) => {
      const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
      )
      console.log('opened with error', error);
      return store
    })
};
