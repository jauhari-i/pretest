import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const history = createBrowserHistory();

export default function (initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [reactRouterMiddleware, thunk];
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
}
