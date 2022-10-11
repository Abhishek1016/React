import React from 'react';
import ReactDOM from 'react-dom/client';


import { Provider } from 'react-redux';
import {createStore} from "redux";
import App from './App';
import { Allreducer } from './Reducer/allreducer';

const storelayer=createStore(Allreducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={storelayer}>
    <App/>
    </Provider>

);

