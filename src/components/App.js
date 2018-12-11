import React, { Component } from 'react';
import $ from 'jquery';

import Navbar from './Navbar';
import Globe from './Globe';

import photoMainUrl from '../img/photo-main.jpg';
import photoContactsUrl from '../img/photo-contacts.jpg';

class App extends Component {
    constructor(props) {
        super(props);
        this.appRef = React.createRef();
        this.onNavLinkClick = this.onNavLinkClick.bind(this);
        this.onUserScroll = this.onUserScroll.bind(this);
    }

    componentDidMount() {
        this.$page = $('html, body');
        this.$page.on('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', this.onUserScroll);
        $(this.appRef.current).on('click', 'a[href^="#"]', this.onNavLinkClick);
    }

    componentWillUnmount() {
        this.$page.off('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', this.onUserScroll);
        $(this.appRef.current.off('click', 'a[href^="#"]', this.onNavLinkClick));
    }

    onNavLinkClick(event) {
        const link = $(event.target).attr('href');
        if (!link.startsWith('#')) {
            return;
        }
        const targetId = link.replace('#', '');
        const target = $(this.appRef.current).find(`a[id="${targetId}"]`);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

    onUserScroll() {
        this.$page.stop();
    }

    render() {
        return (
            <div ref={this.appRef} className="application">
                <Navbar/>
                <div className="navbar-gap"></div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Welcome!</h1>
                        <div className="main-info">
                            <div className="main-info-text">
                                <p className="lead">My name is Dmitriy Pushkov. I'm a full-stack web developer experienced in
                                    JavaScript (both browser and Node.js), React, HTML5, CSS, PHP and many more. I was working
                                    on GIS web, mobile and cross-platform desktop applications last few years including
                                    3D visualization of geospatial vector and raster data. See a list of my core
                                    knowledges <a href="#knowledges">below</a>. If you're interested in collaboration
                                    please <a href="#contacts">contact me</a>.
                                </p>
                            </div>
                            <img className="main-info-photo" src={photoMainUrl} width="170" height="170" />
                        </div>
                    </div>
                </div>
                <div className="restrictor"></div>
                <Globe/>
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
                                <li>React, Redux, MobX</li>
                                <li>Backbone, Marionette</li>
                                <li>Electron</li>
                                <li>ES6, promises</li>
                                <li>Jest, Enzyme, Mocha, Chai</li>
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
                                <li>Relational DB (PostgreSQL, MySQL)</li>
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
                    <img className="contacts-photo" src={photoContactsUrl} width="500" height="616" />
                    <div className="gap"></div>
                </div>
            </div>
        );
    }
}

export default App;
