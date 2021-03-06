import React from 'react';
import { Route} from 'react-router'
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom'

class PrivateRoute extends React.Component {
    render (){
        const {
            isAuthenticated,
            component: Component,
            ...props
        } = this.props

        return (
            <Route
                {...props}
                render={props =>
                    isAuthenticated
                        ? <Component {...props} />
                        : (
                            <Redirect to={{
                                pathname: '/login',
                                state: { from: props.location }
                            }} />
                        )
                }
            />
        )
    }
}

export default connect(
    state => ({
        isAuthenticated: true
    }),
    dispatch => ({
    })
)(PrivateRoute)
