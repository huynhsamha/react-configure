import React from 'react';
import ReactDOM from 'react-dom';

// Libs
import './lib/jquery';
import './lib/bootstrap';

// Styles
import './index.css';

// Components
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
