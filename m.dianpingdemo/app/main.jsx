import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import RouteMap from './routes/routeMap.jsx';

const root = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <RouteMap />
    </Provider>,
    root
);




