import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import allReducers from './reducers/all-reducers';
import FirmataTestTool from './components/firmata-test-tool';
import axios from 'axios';
import thunk from 'redux-thunk';
import websocket from '@giantmachines/redux-websocket';
import { WEBSOCKET_CONNECT } from '@giantmachines/redux-websocket';



const middleware = applyMiddleware(thunk , websocket);
const store = createStore(allReducers, middleware);

store.dispatch({
    type: WEBSOCKET_CONNECT,
    payload: {
        url: "ws://localhost:1701/pins"
    }
})

ReactDOM.render(
    <Provider store={store}>
        <FirmataTestTool/>
    </Provider>
    , document.getElementById('root'));