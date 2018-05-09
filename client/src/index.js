import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import store from "./store";

import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
