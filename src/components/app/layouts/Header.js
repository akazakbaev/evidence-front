import React from 'react'
import HeaderUserMenu from "../../user/components/HeaderUserMenu";
import HeaderProjectMenu from "../../project/components/HeaderProjectMenu";
import HeaderAdminMenu from "../components/HeaderAdminMenu";


export default class Header extends React.Component {
    render (){
        return(
            <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-shadow">
                <div className="navbar-wrapper">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav flex-row">
                            <li className="nav-item mobile-menu d-md-none mr-auto">
                                <a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                                    <i className="ft-menu font-large-1"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand" href="index.html">
                                    <img className="brand-logo" alt="robust admin logo" src="/images/logo/logo-dark-sm.png"/>
                                        <h3 className="brand-text">Evidence Asia</h3>
                                </a>
                            </li>
                            <li className="nav-item d-md-none">
                                <a className="nav-link open-navbar-container"><i className="fa fa-ellipsis-v"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-container content">
                        <div className="collapse navbar-collapse" id="navbar-mobile">
                            <ul className="nav navbar-nav mr-auto float-left">
                                <HeaderProjectMenu/>
                            </ul>

                            <ul className="nav navbar-nav float-right">
                                <HeaderAdminMenu/>
                                <HeaderUserMenu/>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}