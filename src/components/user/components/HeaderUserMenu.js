import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        className="dropdown-toggle nav-link dropdown-user-link"
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >


                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}

            </div>
        );
    },
);

export default class HeaderUserMenu extends React.Component {
    render (){
        return(
            <li class="dropdown dropdown-user nav-item">
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-user-link">
                        <span class="avatar avatar-online">
                            <img src="/images/portrait/small/avatar-s-1.png"alt="avatar"/><i></i>
                        </span>
                        <span class="user-name">John Doe</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu} className="dropdown-menu-right">
                        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Orange
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                        <a class="dropdown-item" href="#"><i class="ft-mail"></i> My Inbox</a>
                    </Dropdown.Menu>
                </Dropdown>




            </li>
        );
    }
}