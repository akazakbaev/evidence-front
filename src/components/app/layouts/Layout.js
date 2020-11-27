import React from 'react'
import Header from "./Header";

import {history, store} from "../../../configureStore";
import Content from "./Content";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router'

export default class Layout extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Header/>
                    <Content/>
                </ConnectedRouter>
            </Provider>
        )
    }
}