import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers';
import rootSaga from './sagas';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
    : compose;

const middlewares =[sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

// create a redux store with our reducer above and middleware
let store = createStore(
  rootReducer,
  composeEnhancers(...enhancers)
);

// run the saga
sagaMiddleware.run(rootSaga);

export default store;