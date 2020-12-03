import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        className="nav-link"
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        <span>{children}</span>
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

const CustomContainer = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <li className={className}>
                {React.Children.toArray(children).filter(
                    (child) =>
                        !value || child.props.children.toLowerCase().startsWith(value),
                )}
            </li>
        );
    },
);

export default class HeaderAdminMenu extends React.Component {
    render () {
        return (
            <Dropdown as={CustomContainer} className="mega-dropdown nav-item">
                <Dropdown.Toggle as={CustomToggle} id="header-admin-menu">
                    <i className="fa fa-th-large"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu} className="mega-dropdown-menu dropdown-menu row">
                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}