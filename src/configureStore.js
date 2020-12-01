import { createBrowserHistory } from 'history'
import reducers from './reducers'
import { createStore, combineReducers, applyMiddleware } from "redux";
import {routerReducer,push} from "react-router-redux";
import { routerMiddleware, connectRouter  } from 'connected-react-router'

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

export const store = createStore(
    combineReducers({
        ...reducers,
        router: connectRouter(history),
    }),
    applyMiddleware(middleware)
);