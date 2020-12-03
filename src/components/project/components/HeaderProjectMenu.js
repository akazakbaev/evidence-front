import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        className="dropdown-toggle nav-link"
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

export default class HeaderProjectMenu extends React.Component {
    render () {
        return (
            <li className="dropdown nav-item">
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="header-project-menu">
                        Проекты
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu} className="dropdown-menu-right">
                        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Orange
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                        <a className="dropdown-item" href="#"><i className="ft-mail"></i> My Inbox</a>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
        )
    }
}