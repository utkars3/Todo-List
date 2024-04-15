export interface Todo{
    id:number;
    todo:string;
    isDone:boolean;
}







//see how reducer can work in this
// type Actions=
//     | {type:'add';payload:string}
//     | {type:'remove';payload:number}
//     | {type:'done';payload:number}



// const TodoReducer=(state:Todo[],action:Actions)=>{

// }

// import { useReducer } from 'react';

// const reducerExample = () => {
//   const [state,dispatch]=useReducer(TodoReducer,[]);
//     return (
//     <div/>

//   )
// }

