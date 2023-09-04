import { useState } from "react"
import "./counter.css"

const Counter = () => {


    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

  return (
    <div className="container">
        <h1>{count}</h1>

       <div className="row">
       <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
       </div>
    </div>
  )
}

export default Counter