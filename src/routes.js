import React from 'react';
import { Route, Switch } from 'react-router'
import PrivateRoute from './components/app/components/PrivateRoute'
import Home from "./components/app/components/Home";

export const Routes = function() {
    <Switch>
        <PrivateRoute exact path="/" component={Home}/>
    </Switch>
}