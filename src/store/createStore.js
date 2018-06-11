import { applyMiddleware, createStore, compose } from 'redux'
import { makeRootReducer } from './reducers'
import { rootSaga, sagaMiddleware } from './sagas'
import { routerMiddleware } from 'react-router-redux'

export default (initialState = {}, history) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [sagaMiddleware, routerMiddleware(history)]

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
  store.asyncReducers = {}

  // ========================================================
  // Saga Setup
  // ========================================================
  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
