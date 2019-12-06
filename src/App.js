import React from 'react';
import {useSelector} from 'react-redux';

function App() {
  const counter=useSelector(state=>state.counter);
  const islogedin=useSelector(state=>state.isLogged);
  return (
    <div className="App">
<h1>Counter {counter}</h1>
{islogedin ? <h2>loggedin</h2> : <h2>not loggedin</h2>}

    </div>
  );
}

export default App;
