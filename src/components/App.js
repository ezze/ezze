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
                <p className="lead">
                  My name is Dmitriy Pushkov. I'm a full-stack web developer experienced in
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
                <li>React, MobX, Redux</li>
                <li>Backbone, Marionette</li>
                <li>Electron</li>
                <li>ES6, promises, web sockets</li>
                <li>Jest, Enzyme, Mocha, Codecov, Puppeteer</li>
              </ul>
            </div>
            <div className="col-lg">
              <h3>Build tools</h3>
              <ul>
                <li>NPM, Yarn, Lerna, Verdaccio</li>
                <li>Webpack, Rollup</li>
                <li>Gulp, Grunt</li>
                <li>Require.js & Almond</li>
                <li>CI (Gitlab CI, Travis CI, Circle CI)</li>
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
                <li>Nginx, Apache web server</li>
                <li>Docker</li>
              </ul>
            </div>
            <div className="col-lg">
              <h3>Environment</h3>
              <ul>
                <li>Ubuntu, Ubuntu Touch, Windows</li>
                <li>Git</li>
                <li>WebStorm, PhpStorm, Android Studio</li>
              </ul>
            </div>
          </div>
          <div className="gap"></div>
          <a id="videos"></a>
          <h1 className="display-4 text-center">Video demos</h1>
          <p className="text-center">
            Below are videos demonstrating my work during last five years. It's mainly dedicated to geospatial related
            projects built from scratch with the following stack: React, Mobx (Redux previously), Node.js, TypeScript,
            PostgreSQL/PostGIS, HTML5/CSS3.
          </p>
          <div className="gap-half"></div>
          <div className="row">
            <div className="col-lg">
              <h3>GeoMonitor & GeoBase</h3>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe src="https://www.youtube.com/embed/DyxC9uPo6wg?&vq=hd1080" frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen>
                </iframe>
              </div>
              <div className="gap-half"></div>
            </div>
            <div className="col-lg">
              <h3>GeoMonitor & GeoBase (2020)</h3>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe src="https://www.youtube.com/embed/3rXgMri8W2Q?&vq=hd1080" frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen>
                </iframe>
              </div>
              <div className="gap-half"></div>
            </div>
          </div>
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
          <div className="row">
            <div className="col-lg">
              <h3>Geography Game</h3>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe src="https://www.youtube.com/embed/N5FtvH5ixxs?&vq=hd1080" frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen>
                </iframe>
              </div>
              <div className="gap-half"></div>
            </div>
            <div className="col-lg">
              <h3>Math Hunger Game</h3>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe src="https://www.youtube.com/embed/H9rE190cjVk?&vq=hd1080" frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen>
                </iframe>
              </div>
              <div className="gap-half"></div>
            </div>
          </div>
          <div className="gap"></div>
          <a id="live"></a>
          <h1 className="display-4 text-center">Live demos (games)</h1>
          <p className="text-center">These games are written for my kids and just for fun:</p>
          <div className="row row-live">
            <div className="col-md">
              <ul>
                <li><a href="https://storekeeper.yellowberry.ru">Storekeeper</a></li>
                <li><a href="https://geography.yellowberry.ru">Geography</a></li>
              </ul>
            </div>
            <div className="col-md">
              <ul>
                <li><a href="https://mh.yellowberry.ru">Math Hunger</a></li>
                <li><a href="https://math.yellowberry.ru">Math</a></li>
              </ul>
            </div>
          </div>
          <div className="gap"></div>
          <a id="opensource"></a>
          <h1 className="display-4 text-center">Open source</h1>
          <p className="text-center">
            Here are the links to some open source projects I contributed to and
            a few simple own libraries I can share:
          </p>
          <div className="row">
            <div className="col-lg">
              <ul>
                <li><a href="https://github.com/shashwatak/satellite-js">satellite.js</a></li>
                <li><a href="https://github.com/AnalyticalGraphicsInc/cesium">cesium</a></li>
                <li><a href="https://github.com/arloliu/copy-node-modules">copy-node-modules</a></li>
              </ul>
            </div>
            <div className="col-lg">
              <ul>
                <li><a href="https://github.com/ezze/storekeeper">storekeeper</a></li>
                <li><a href="https://github.com/ezze/math-hunger">math-hunger</a></li>
                <li><a href="https://github.com/ezze/geography">geography</a></li>
              </ul>
            </div>
            <div className="col-lg">
              <ul>
                <li><a href="https://github.com/ezze/cestbleu">cestbleu</a></li>
                <li><a href="https://github.com/ezze/node-raise-version">raise-version</a></li>
                <li><a href="https://github.com/ezze/node-perfect-json">perfect-json</a></li>
              </ul>
            </div>
            <div className="col-lg">
              <ul>
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
