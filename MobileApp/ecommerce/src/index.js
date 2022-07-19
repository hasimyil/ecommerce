import { View, Text } from 'react-native'
import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux'
import reducers from '@reducer'
import { NativeBaseProvider } from 'native-base'
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import sagas from "@sagas";
import AppNavigator from './AppNavigator'
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({ predicate: () => true });

let store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware,loggerMiddleware))
)

sagaMiddleware.run(sagas)

App = () => {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <AppNavigator />
            </NativeBaseProvider>
        </Provider>
    )
}


export default App