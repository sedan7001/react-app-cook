import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from "./store/configureStore";

const store = configureStore();

const renderApp = () => (
    <Provider store={store}>
        <BrowserRouter >
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>
);

const root = document.getElementById('root');
ReactDOM.render(renderApp(), root);
