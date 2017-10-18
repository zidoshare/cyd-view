import createHistory from 'history/createBrowserHistory'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import {createLogger} from 'redux-logger'
import {connect} from 'react-redux'
import {Switch} from 'react-router-dom'


// import makeRootReducer from './reducers'
// import { updateLocation } from './location'
import * as reducers from './modules'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    router: routerReducer,
    ...asyncReducers
  })
}

// export const injectReducer = (store, {key, reducer}) => {
//   store.asyncReducers[key] = reducer
//   store.replaceReducer(makeRootReducer(store.asyncReducers))
// }


export const history = createHistory()
const historyMiddleware = routerMiddleware(history)
const loggerMiddleware = createLogger()
export default () => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, historyMiddleware, loggerMiddleware]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (process.env.NODE_ENV == 'development') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }
  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(reducers),
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  //store.unsubscribeHistory = history.listen(updateLocation(store))
  return store
}

export const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch)

