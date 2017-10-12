import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import allReducers from './reducers/all-reducers';
import FirmataTestTool from './components/firmata-test-tool';
import axios from 'axios';
import thunk from 'redux-thunk';



const middleware = applyMiddleware(thunk);
const store = createStore(allReducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <FirmataTestTool/>
    </Provider>
    , document.getElementById('root'));