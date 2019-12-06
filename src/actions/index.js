//ACTION INCREMENT
export const increment=(x)=>
{ console.log('action-increment');  
  return { type: 'INCREMENT', //type is just a name, it can be anything like xyz
           payload:  x,  //payload is just a name, it can be anything like xyz
          }  
}//type or name or anything
export const decrement=()=>{ console.log('action-decrement'); return { type: 'DECREMENT'}  }//type or name or anything
//DISPATCH

//store.dispatch(decrement());