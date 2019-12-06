import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() 
{ const counter=useSelector(state=>state.counter);
  const islogedin=useSelector(state=>state.isLogged);
  const dispatch= useDispatch();

  return (
    <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={()=>dispatch(increment(5))}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        {islogedin ? <h2>loggedin</h2> : <h2>not loggedin</h2>}
    </div>
  );
}

export default App;
