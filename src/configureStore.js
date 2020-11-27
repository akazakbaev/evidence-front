import { createBrowserHistory } from 'history'
import reducers from './reducers'
import { createStore, combineReducers, applyMiddleware } from "redux";
import {routerReducer,routerMiddleware,push} from "react-router-redux";
import { connectRouter } from 'connected-react-router'

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

export const store = createStore(
    combineReducers({
        ...reducers,
        routerReducer
    }),
    applyMiddleware(middleware)
);