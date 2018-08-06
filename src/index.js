import 'react-hot-loader/patch'
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom';
import configureStore from "./store/configureStore";
import App from 'components/App'
import { basename } from 'config'


const store = configureStore();
const renderApp = () => (
    <Provider store={store}>
        <BrowserRouter basename={basename}>
            <App />
        </BrowserRouter>
    </Provider>
);

const root = document.getElementById('app');
render(renderApp(), root);


if (module.hot) {
    module.hot.accept('components/App', () => {
        require('components/App');
        render(renderApp(), root)
    })
}

