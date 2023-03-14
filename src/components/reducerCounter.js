import {useReducer} from "react";
// const initialState = {
//     firstCounter: 0
// };
const reducer= (state, action) => {
    switch(action.type){
        case 'increment':
            return {count: state.count + action.points};
        case 'decrement':
            return {count: state.count - action.points};
        case 'reset':
            return  {count: state.count = 0};
        default:
            return state;
    }
}
const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return ( 
        <div>
            <h1>{state.count}</h1> 
            <button onClick = {() => dispatch({type: 'increment', points: 1})}>Increment</button>
            <button onClick = {() => dispatch({type: 'increment' , points: 5})}>Increment 5</button>
            <button onClick = {() => dispatch({type: 'decrement' , points: 1})}>Decrement</button>
            <button onClick = {() => dispatch({type: 'decrement' , points: 5})}>Decrement 5</button>
            <button onClick = {() => dispatch({type: 'reset'})}>Reset</button>
        </div>
     );
}
 
export default ReducerCount;