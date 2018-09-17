import Promise from 'bluebird';

import React, { Component } from 'react';
import Loading from 'react-loading';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import MobileDetect from 'mobile-detect';

import earthTextureUrl from '../img/earth.jpg';
import starsTextureUrl from '../img/stars.png';
import satelliteGltf from '../gltf/satellite.gltf';

const globeRadius = 120;
const globeWidthSegments = 50;
const globeHeightSegments = 50;
const globeEclipticAngle = Math.PI / 180 * 23.5;
const globeRotationStep = 0.005;
const globeRotationAxis = new THREE.Vector3(Math.sin(globeEclipticAngle), Math.cos(globeEclipticAngle), 0);

const starsRadius = 500;
const starsWidthSegments = 50;
const starsHeightSegments = 50;
const starsRotationStep = 0.0005;

const satelliteScale = 5;
const satelliteOrbitRadius = 170;
const satelliteVerticalShift = 50;
const satelliteRotationStep = -0.02;

const cameraFov = 45;
const cameraNear = 1;
const cameraFar = 1000;
const cameraDistance = 400;

const cameraShadowNear = 1;
const cameraShadowFar = 700;
const cameraShadowTop = 300;
const cameraShadowBottom = -300;
const cameraShadowLeft = -300;
const cameraShadowRight = 300;

const lightX = 200;
const lightY = 0;
const lightZ = 150;

const fps = 30;
const fpsInterval = 1000 / fps;

const mobileDetect = new MobileDetect(window.navigator.userAgent);

class Globe extends Component {
    constructor() {
        super();
        this.globeRef = React.createRef();
        this.state = {
            loading: true,
            error: false
        };
        this.update = this.update.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
    }

    componentDidMount() {
        const renderer = this.renderer = new THREE.WebGLRenderer();
        if (!mobileDetect.phone()) {
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        }

        this.globeRef.current.appendChild(renderer.domElement);

        const canvas = this.renderer.domElement;
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        this.renderer.setSize(width, height);

        const scene = this.scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        const cameraAspect = width / height;
        const camera = this.camera = new THREE.PerspectiveCamera(cameraFov, cameraAspect, cameraNear, cameraFar);
        camera.position.set(0, 0, cameraDistance);
        scene.add(camera);

        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.castShadow = true;
        light.shadow.camera.near = cameraShadowNear;
        light.shadow.camera.far = cameraShadowFar;
        light.shadow.camera.top = cameraShadowTop;
        light.shadow.camera.bottom = cameraShadowBottom;
        light.shadow.camera.left = cameraShadowLeft;
        light.shadow.camera.right = cameraShadowRight;

        light.position.set(lightX, lightY, lightZ);
        scene.add(light);

        scene.add(new THREE.AmbientLight(0x888888, 0.5));

        //const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
        //scene.add(cameraHelper);

        Promise.all([
            createStars(),
            createGlobe(),
            createSatellite(),
        ]).then(objects => {
            const stars = this.stars = objects[0];
            const globe = this.globe = objects[1];
            const satellite = this.satellite = objects[2];
            globe.rotateY(Math.PI);
            globe.rotateZ(globeEclipticAngle);
            satellite.position.set(0, satelliteVerticalShift, satelliteOrbitRadius);
            satellite.scale.set(satelliteScale, satelliteScale, satelliteScale);
            globe.receiveShadow = true;
            globe.castShadow = true;
            this.updateSatelliteOrientation();
            scene.add(globe);
            scene.add(stars);
            scene.add(satellite);
            this.lastFrameTime = Date.now();
            this.setState({
                loading: false
            });
            requestAnimationFrame(this.update);
        }).catch(e => {
            this.setState({
                loading: false,
                error: true
            });
            console.error(e);
        });

        window.addEventListener('resize', this.onWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    updateSize() {
        const container = this.globeRef.current;
        const width = container.offsetWidth;
        const { height } = this.getSize();
        this.renderer.setSize(width, height);
        return { width, height };
    }

    getSize() {
        return this.renderer.getSize();
    }

    update() {
        requestAnimationFrame(this.update);

        const now = Date.now();
        const elapsed = now - this.lastFrameTime;
        if (elapsed > fpsInterval) {
            this.lastFrameTime = now - (elapsed % fpsInterval);
            this.stars.rotation.y += starsRotationStep;
            this.globe.rotateOnWorldAxis(globeRotationAxis, globeRotationStep);
            const { satellite } = this;
            const angle = Math.atan2(satellite.position.x, satellite.position.z) + satelliteRotationStep;
            satellite.position.set(
                satelliteOrbitRadius * Math.sin(angle),
                satelliteVerticalShift,
                satelliteOrbitRadius * Math.cos(angle)
            );
            this.updateSatelliteOrientation();
            this.renderer.render(this.scene, this.camera);
        }
    }

    updateSatelliteOrientation() {
        const { satellite } = this;
        satellite.lookAt(satellite.position.clone().normalize().multiplyScalar(-1));
        satellite.rotateX(Math.PI / 2);
    }

    render() {
        const className = `globe${this.state.loading ? ' globe-loading' : ''}`;
        const error = this.state.error ? (
            <div className="globe-error">
                <p>Unable to initialize globe visualization!</p>
            </div>) : '';

        return (
            <div className={className} ref={this.globeRef}>
                <div className="globe-loading-indicator">
                    <p>Please wait while globe is being loaded...</p>
                    <Loading className="globe-loading-indicator-item" type="spin" width="128" height="128" color="#fff" />
                </div>
                {error}
            </div>
        );
    }

    onWindowResize() {
        const { width, height } = this.updateSize();
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }
}

async function createStars() {
    const texture = await loadStarsTexture();
    const sphere = new THREE.SphereGeometry(starsRadius, starsWidthSegments, starsHeightSegments);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide
    });
    const stars = new THREE.Mesh(sphere, material);
    return Promise.resolve(stars);
}

async function createGlobe() {
    const texture = await loadEarthTexture();
    const sphere = new THREE.SphereGeometry(globeRadius, globeWidthSegments, globeHeightSegments);
    const material = new THREE.MeshPhongMaterial({
        map: texture,
        shininess: 0,
        overdraw: 0.5
    });
    const globe = new THREE.Mesh(sphere, material);
    return Promise.resolve(globe);
}

async function createSatellite() {
    const model = await loadSatelliteModel();
    return Promise.resolve(model);
}

function loadTexture(url) {
    const loader = new THREE.TextureLoader();
    return new Promise((resolve, reject) => {
        loader.load(url, texture => resolve(texture), undefined, error => reject(error));
    });
}

function loadEarthTexture() {
    return loadTexture(earthTextureUrl);
}

function loadStarsTexture() {
    return loadTexture(starsTextureUrl);
}

function loadGltfModel(url) {
    const loader = new GLTFLoader();
    return new Promise((resolve, reject) => {
        loader.load(url, gltf => {
            resolve(gltf.scene);
        }, undefined, error => reject(error));
    });
}

function parseGltfModel(contents) {
    const loader = new GLTFLoader();
    return new Promise((resolve, reject) => {
        loader.parse(contents, '', gltf => {
            gltf.scene.traverse(node => {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });
            resolve(gltf.scene);
        }, error => reject(error));
    });
}

function loadSatelliteModel() {
    return parseGltfModel(satelliteGltf);
}

export default Globe;
