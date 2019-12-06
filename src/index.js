import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducer from './reducers'
//STORE
let store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=>console.log(store.getState())) //show console log

//ACTION INCREMENT
//const increment=()=>{ console.log('action-increment');  return { type: 'INCREMENT'}  }//type or name or anything
//const decrement=()=>{ console.log('action-decrement'); return { type: 'DECREMENT'}  }//type or name or anything
//DISPATCH
//store.dispatch(increment());
//store.dispatch(decrement());
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
