import React, { Component } from 'react';
import $ from 'jquery';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navbarRef = React.createRef();
    }

    componentDidMount() {
        $(this.navbarRef.current).find('.nav-link').on('click', () => {
            console.log('here');
            $('.navbar-content').collapse('hide');
        });
    }

    render() {
        return (
            <nav ref={this.navbarRef} className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/">www.ezze.org</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-content"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse navbar-content">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#knowledges">Knowledges</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contributions">Contributions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacts">Contacts</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/ezze">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://stackoverflow.com/users/506695/ezze">Stack Overflow</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
