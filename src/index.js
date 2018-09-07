import React from 'react';
import { render } from 'react-dom';

import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
    render(
        <App />,
        document.querySelector('#container')
    );
});
