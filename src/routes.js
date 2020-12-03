import React from 'react';
import { Route, Switch } from 'react-router'
import PrivateRoute from './components/app/components/PrivateRoute'
import Home from "./components/app/pages/Home";
import View from "./components/project/pages/View";

const routes = (
    <Switch>
        {/*<Route exact path="/" component={Home}/>*/}
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute path="/project" component={View}/>
    </Switch>
)

export default routes