import React, { Component } from 'react';
import '../style.css';
class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li id="logoId">
                        <a href="#default" className="logo">REPORTi</a>
                    </li>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a className="active1" href="#search">Search</a>
                    </li>
                    <li>
                        <a href="#Settings">Settings</a>
                    </li>

                    <li id="logoutId">
                        <a href="#Logout">Logout</a>
                    </li>
                    <li id="userId">
                        <a href="#Logout">sheela.varadhan@gmail.com <i className="fa fa-caret-down"></i></a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Header;