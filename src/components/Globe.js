import Promise from 'bluebird';

import React, { Component } from 'react';
import * as THREE from 'three';

import earthTextureUrl from '../img/earth.jpg';
import starsTextureUrl from '../img/stars.png';

const globeRadius = 120;
const globeWidthSegments = 50;
const globeHeightSegments = 50;
const globeShift = 0.005;

const starsRadius = 500;
const starsWidthSegments = 50;
const starsHeightSegments = 50;
const starsShift = 0.0005;

const cameraFov = 45;
const cameraNear = 0.1;
const cameraFar = 1000;
const cameraDistance = 400;

const fps = 30;
const fpsInterval = 1000 / fps;

class Globe extends Component {
    constructor() {
        super();
        this.globeRef = React.createRef();
        this.update = this.update.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
    }

    componentDidMount() {
        const renderer = this.renderer = new THREE.WebGLRenderer();
        this.globeRef.current.appendChild(renderer.domElement);

        const canvas = this.renderer.domElement;
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        this.renderer.setSize(width, height);

        const cameraAspect = width / height;
        const camera = this.camera = new THREE.PerspectiveCamera(cameraFov, cameraAspect, cameraNear, cameraFar);
        camera.position.set(0, 0, cameraDistance);

        const scene = this.scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000);
        scene.add(camera);

        Promise.all([
            createStars(),
            createGlobe(),
        ]).then(objects => {
            const stars = this.stars = objects[0];
            const globe = this.globe = objects[1];
            scene.add(globe);
            scene.add(stars);
            this.lastFrameTime = Date.now();
            requestAnimationFrame(this.update);
        }).catch(e => console.error(e));

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

            this.globe.rotation.y += globeShift;
            this.stars.rotation.y += starsShift;
            this.renderer.render(this.scene, this.camera);
        }
    }

    render() {
        return (
            <div className="globe" ref={this.globeRef}></div>
        );
    }

    onWindowResize() {
        const { width, height } = this.updateSize();
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }
}

async function createGlobe() {
    const texture = await loadEarthTexture();
    const globe = new THREE.Group();
    const sphere = new THREE.SphereGeometry(globeRadius, globeWidthSegments, globeHeightSegments);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        overdraw: 0.5
    });
    const mesh = new THREE.Mesh(sphere, material);
    globe.add(mesh);
    globe.rotation.y = Math.PI;
    return Promise.resolve(globe);
}

async function createStars() {
    const texture = await loadStarsTexture();
    const stars = new THREE.Group();
    const sphere = new THREE.SphereGeometry(starsRadius, starsWidthSegments, starsHeightSegments);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide
    });
    const mesh = new THREE.Mesh(sphere, material);
    stars.add(mesh);
    return Promise.resolve(stars);
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

export default Globe;
