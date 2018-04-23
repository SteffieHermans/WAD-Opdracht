import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import store from "./store";

ReactDOM.render(<BrowserRouter><App store={store}/></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
