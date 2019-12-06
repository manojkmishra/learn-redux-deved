import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
//ACTION INCREMENT
const increment=()=>{ console.log('action-increment');  return { type: 'INCREMENT'}  }//type or name or anything
const decrement=()=>{ console.log('action-decrement'); return { type: 'DECREMENT'}  }//type or name or anything
//REDUCER
const reducercounter=(state=0,action)=>
    {    switch(action.type)
            {  case "INCREMENT": {console.log('reducer-case INCREMENT- state',state,'+1');return state + 1;}
               case "DECREMENT": {console.log('reducer-case DECREMENT- state',state,'-1');return state - 1;}
            }
    }
//STORE
let store = createStore(reducercounter);
store.subscribe(()=>console.log(store.getState())) //show console log
//DISPATCH
store.dispatch(increment());
store.dispatch(decrement());
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
