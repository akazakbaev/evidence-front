import React from 'react'
import routes from "../../../routes";
import Breadcrumb from "../components/Breadcrumb";

export default class Content extends React.Component {
    render() {
        return (
            <div className="app-content content">
                <div className="content-wrapper">
                    <Breadcrumb/>
                    {routes}
                </div>
            </div>

        )
    }
}