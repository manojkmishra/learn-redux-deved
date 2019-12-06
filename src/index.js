import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducer from './reducers'
import {Provider} from 'react-redux';
//STORE
let store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=>console.log(store.getState())) //show console log

ReactDOM.render( 
            <Provider store={store}>
                <App />
             </Provider>,
 document.getElementById('root'));
serviceWorker.unregister();
