import React from 'react';

import Navbar from './Navbar';
import Globe from './Globe';

const App = () => {
    return (
        <div className="application">
            <Navbar />
            <div className="navbar-gap"></div>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Welcome!</h1>
                    <p className="lead">My name is Dmitriy Pushkov. I'm a full-stack web developer experienced in
                    JavaScript (both browser and Node.js), PHP, React, HTML5, CSS and many more.</p>
                </div>
            </div>
            <div className="restrictor"></div>
            <Globe />
            <div className="restrictor"></div>
            <div className="container">
                <div className="gap"></div>
                <a id="knowledges"></a>
                <h1 className="display-4 text-center">Knowledges</h1>
                <div className="gap-half"></div>
                <div className="row">
                    <div className="col-lg">
                        <h3>JavaScript</h3>
                        <ul>
                            <li>Node.js (Koa, Express, Sequelize ORM)</li>
                            <li>React, Redux</li>
                            <li>Backbone, Marionette</li>
                            <li>Electron</li>
                            <li>ES6, promises</li>
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
                            <li>HTML5, WebGL</li>
                            <li>Adaptive layout</li>
                            <li>Flexbox</li>
                            <li>Twitter Bootstrap, Bulma</li>
                            <li>Preprocessors (SASS & LESS)</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <h3>Geography</h3>
                        <ul>
                            <li>Cesium, Leaflet, OpenLayers</li>
                            <li>Yandex Maps API, Google Maps API</li>
                            <li>GDAL</li>
                            <li>GeoServer, MapServer, WMS</li>
                            <li>SGP4</li>
                            <li>QGIS</li>
                        </ul>
                    </div>
                    <div className="col-lg">
                        <h3>Languages & tools</h3>
                        <ul>
                            <li>Relational DBs (PostgreSQL, MySQL)</li>
                            <li>PHP (Yii framework)</li>
                            <li>Java (Android mobile, desktop, applets)</li>
                            <li>C/C++</li>
                            <li>Apache web server, Apache JMeter</li>
                            <li>Docker</li>
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
                <a id="projects"></a>
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
                        <div className="gap-half"></div>
                    </div>
                    <div className="col-lg">
                        <h3>GeoPort 3D</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/pA-LJszq2mQ?&vq=hd720" frameBorder="0"
                                    allow="autoplay; encrypted-media" allowFullScreen>
                            </iframe>
                        </div>
                        <div className="gap-half"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <h3>Kitgeo Planner</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/I8-vmpF86-Q?&vq=hd1080" frameBorder="0"
                                    allow="autoplay; encrypted-media" allowFullScreen>
                            </iframe>
                        </div>
                        <div className="gap-half"></div>
                    </div>
                    <div className="col-lg">
                        <h3>GeoBox</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/0pJqjGuija0?&vq=hd720" frameBorder="0"
                                    allow="autoplay; encrypted-media" allowFullScreen>
                            </iframe>
                        </div>
                        <div className="gap-half"></div>
                    </div>
                </div>
                <div className="gap"></div>
                <a id="contributions"></a>
                <h1 className="display-4 text-center">Contributions</h1>
                <div className="row">
                    <div className="col-md">
                        <ul>
                            <li><a href="https://github.com/shashwatak/satellite-js">satellite.js</a></li>
                            <li><a href="https://github.com/AnalyticalGraphicsInc/cesium">cesium</a></li>
                            <li><a href="https://github.com/arloliu/copy-node-modules">copy-node-modules</a></li>
                            <li><a href="https://github.com/zinserjan/mocha-webpack">mocha-webpack</a></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <ul>
                            <li><a href="https://github.com/ezze/cestbleu">cestbleu</a></li>
                            <li><a href="https://github.com/ezze/dissemination">dissemination</a></li>
                            <li><a href="https://github.com/ezze/merge-professor">merge-professor</a></li>
                            <li><a href="https://github.com/ezze/html-element-size">html-element-size</a></li>
                        </ul>
                    </div>
                </div>
                <div className="gap"></div>
                <a id="contacts"></a>
                <h1 className="display-4 text-center">Contacts</h1>
                <p className="text-center">Phone: +7 (926) 034-94-43</p>
                <p className="text-center">E-mail: ezze at ezze dot org</p>
                <div className="gap"></div>
            </div>
        </div>
    );
};

export default App;
