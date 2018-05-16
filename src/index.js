import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

ReactDOM.render(
                <Routes history={BrowserRouter} />,
                document.getElementById('root')
                );
registerServiceWorker();
