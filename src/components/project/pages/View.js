import React from 'react';

export default  class View extends React.Component {
    render (){
        return (
            <div className="content-wrapper">
                <div className="main-menu menu-static menu-light menu-accordion menu-shadow">
                    <div className="main-menu-content">
                        <ul className="navigation navigation-main">
                            <li className="nav-item">
                                <a href="efwef">
                                    <i className="icon-envelope"></i>
                                    <span className="menu-title">efwef</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-body">
                    project
                </div>

            </div>
        )
    }
}