import React from 'react';
import { Route, Switch } from 'react-router'
import PrivateRoute from './components/app/components/PrivateRoute'
import Home from "./components/app/pages/Home";
import View from "./components/project/pages/View";
import Create from "./components/project/pages/Create";

const routes = (
    <Switch>
        {/*<Route exact path="/" component={Home}/>*/}
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute exact path="/projects" component={View}/>
        <PrivateRoute path="/project/create" component={Create}/>
        <PrivateRoute path="/project/:id" component={View}/>
    </Switch>
)

export default routes