import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

require('es6-promise').polyfill();
require('isomorphic-fetch');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();