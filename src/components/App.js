import React from 'react';

const App = () => {
    return (
        <div className="application">
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
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
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Welcome!</h1>
                    <p className="lead">My name is Dmitriy Pushkov. I'm a full-stack web developer experienced in
                    JavaScript (both browser and Node.js), PHP, React, HTML5, CSS and many more.</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h1>Technologies</h1>
                    </div>
                    <div className="col-md">
                        <h1>Tools</h1>
                    </div>
                    <div className="col-md">
                        <h1>Environment</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
