const counterReducer=(state=0,action)=>
    {    switch(action.type)
            {  case "INCREMENT": {console.log('counterReducer-case INCREMENT- state',state,'+1');return state + 1;}
               case "DECREMENT": {console.log('counterReducer-case DECREMENT- state',state,'-1');return state - 1;}
               default: return state;
            }
    };
export default counterReducer;