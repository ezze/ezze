import React from 'react';
import { render } from 'react-dom';

import 'bootstrap';
import './index.sass';

import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('#root');
  render(
    <App />,
    rootElement
  );
});
