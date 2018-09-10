import React, { Component } from 'react';
import * as THREE from 'three';

import earthTextureUrl from '../img/earth.jpg';

class Intro extends Component {
    constructor() {
        super();
        this.containerRef = React.createRef();
        this.update = this.update.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
    }

    componentDidMount() {
        const renderer = this.renderer = new THREE.WebGLRenderer();
        this.containerRef.current.appendChild(renderer.domElement);

        const canvas = this.renderer.domElement;
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        this.renderer.setSize(width, height);

        const fov = 45;
        const aspect = width / height;
        const near = 0.1;
        const far = 10000;

        const camera = this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 0, 500);

        const scene = this.scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000);
        scene.add(camera);

        createGlobe().then(globe => {
            this.globe = globe;
            scene.add(globe);
            requestAnimationFrame(this.update);
        }).catch(e => console.error(e));

        window.addEventListener('resize', this.onWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    updateSize() {
        const container = this.containerRef.current;
        const width = container.offsetWidth;
        const { height } = this.getSize();
        this.renderer.setSize(width, height);
        return { width, height };
    }

    getSize() {
        return this.renderer.getSize();
    }

    update() {
        this.globe.rotation.y -= 0.01;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.update);
    }

    render() {
        return (
            <div className="intro">
                <div className="container" ref={this.containerRef}></div>
            </div>
        );
    }

    onWindowResize() {
        const { width, height } = this.updateSize();
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix();
    }
}

async function createGlobe() {
    const texture = await loadEarthTexture();
    const globe = new THREE.Group();
    const sphere = new THREE.SphereGeometry(200, 50, 50);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        overdraw: 0.5
    });
    const mesh = new THREE.Mesh(sphere, material);
    globe.add(mesh);
    globe.position.z = -300;
    return Promise.resolve(globe);
}

function loadEarthTexture() {
    const loader = new THREE.TextureLoader();
    return new Promise((resolve, reject) => {
        loader.load(earthTextureUrl, texture => resolve(texture), undefined, error => reject(error));
    });
}

export default Intro;
