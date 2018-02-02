import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Libs
import './lib/jquery';
import './lib/bootstrap';

// Styles
import './index.css';

// Components
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Config redux
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);

registerServiceWorker();
