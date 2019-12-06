//ACTION INCREMENT
export const increment=()=>{ console.log('action-increment');  return { type: 'INCREMENT'}  }//type or name or anything
export const decrement=()=>{ console.log('action-decrement'); return { type: 'DECREMENT'}  }//type or name or anything
//DISPATCH

//store.dispatch(decrement());