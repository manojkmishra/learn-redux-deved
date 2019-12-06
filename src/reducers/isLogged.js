const loggedReducer=(state=false,action)=>
    {    switch(action.type)
            {  case "SIGN_IN": {console.log('reducer-case INCREMENT- state',state,'!state');return !state;}
               default: return state;
            }
    };
    export default loggedReducer;