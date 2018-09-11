import React from 'react';

import Globe from './Globe';

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
                    <h1 className="display-3">Welcome!</h1>
                    <p className="lead">My name is Dmitriy Pushkov. I'm a full-stack web developer experienced in
                    JavaScript (both browser and Node.js), PHP, React, HTML5, CSS and many more.</p>
                </div>
            </div>
            <Globe />
            <div className="container">
                <div className="gap"></div>
                <h1 className="display-4 text-center">Core skills</h1>
                <div className="gap-half"></div>
                <div className="row">
                    <div className="col-lg">
                        <h3>JavaScript</h3>
                        <ul>
                            <li>Node.js (Koa, Express, Sequelize ORM)</li>
                            <li>ES6, promises</li>
                            <li>React, Redux</li>
                            <li>Backbone, Marionette</li>
                            <li>Electron</li>
                            <li>Unit testing (Mocha, Chai)</li>
                        </ul>
                    </div>
                    <div className="col-lg">
                        <h3>Build tools</h3>
                        <ul>
                            <li>NPM, Yarn</li>
                            <li>Webpack</li>
                            <li>Rollup</li>
                            <li>Gulp</li>
                            <li>Grunt</li>
                            <li>NSIS</li>
                        </ul>
                    </div>
                    <div className="col-lg">
                        <h3>HTML & CSS</h3>
                        <ul>
                            <li>HTML5 canvas</li>
                            <li>Adaptive layout</li>
                            <li>Flexbox</li>
                            <li>Twitter Bootstrap, Bulma</li>
                            <li>Preprocessors (SASS & LESS)</li>
                        </ul>
                    </div>
                </div>
                <div className="gap-half"></div>
                <div className="row">
                    <div className="col-lg">
                        <h3>Geo</h3>
                        <ul>
                            <li>Cesium, Leaflet, OpenLayers</li>
                            <li>Yandex Maps API, Google Maps API</li>
                            <li>GDAL</li>
                            <li>SGP4, QGIS</li>
                            <li>GeoServer, MapServer, WMS</li>
                        </ul>
                    </div>
                    <div className="col-lg">
                        <h3>Additional</h3>
                        <ul>
                            <li>PostgreSQL, MySQL</li>
                            <li>PHP (Yii framework)</li>
                            <li>Java (Android mobile, desktop, applets)</li>
                            <li>C/C++</li>
                            <li>Regular expressions</li>
                        </ul>
                    </div>
                    <div className="col-lg">
                        <h3>Environment</h3>
                        <ul>
                            <li>Ubuntu Linux, Windows</li>
                            <li>Git</li>
                            <li>PhpStorm, WebStorm, Android Studio</li>
                        </ul>
                    </div>
                </div>
                <div className="gap"></div>
                <h1 className="display-4 text-center">Projects</h1>
                <div className="gap-half"></div>
                <div className="row">
                    <div className="col-lg">
                        <h3>GeoPort & GeoMonitor</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/vbsHBEq2OiE?&vq=hd1080" frameBorder="0"
                                    allow="autoplay; encrypted-media" allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="col-lg">
                        <h3>GeoPort 3D</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/pA-LJszq2mQ?&vq=hd720" frameBorder="0"
                                    allow="autoplay; encrypted-media" allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="gap-half"></div>
                <div className="row">
                    <div className="col-lg">
                        <h3>Kitgeo Planner</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/I8-vmpF86-Q?&vq=hd1080" frameBorder="0"
                                    allow="autoplay; encrypted-media" allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="col-lg">
                        <h3>GeoBox</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/0pJqjGuija0?&vq=hd720" frameBorder="0"
                                    allow="autoplay; encrypted-media" allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="gap"></div>
            </div>
        </div>
    );
};

export default App;
