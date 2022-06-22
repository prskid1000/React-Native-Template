/**
 * @format
 */

import React from "react";
import {AppRegistry} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import App from './App';
import {name as appName} from './app.json';
import { store, persistor } from './redux/store';


const RApp = () => (
    <Provider store = { store }>
        <PersistGate loading={null} persistor={persistor}>
             <App />
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => RApp);
