import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux'
import { message} from 'antd';
import * as serviceWorker from './serviceWorker';

React.Component.prototype.$msg = message
ReactDOM.render(
    (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
