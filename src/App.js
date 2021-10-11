import React,{useReducer} from 'react'
import './App.css';

const initialState =0
const reducer = (state,action)=>{
  switch(action){
    case 'increment':
      return state+1
      case 'decrement':
        return state- 1
        case 'reset':
        return initialState
        default:
          return state
  }

}
function App() {
  const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div className="App">
    <h3>Count - {count}</h3>
     <button onClick={()=>dispatch('increment')}>Increment</button>
     <button onClick={()=>dispatch('decrement')}>Decrement</button>
     <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  );
}

export default App;
