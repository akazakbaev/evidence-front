import React from 'react'
import routes from "../../../routes";

export default class Content extends React.Component {
    render() {
        return (
            <div className="app-content content">
                {routes}
            </div>

        )
    }
}