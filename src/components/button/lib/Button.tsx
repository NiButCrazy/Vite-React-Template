import {useState} from "react";


function Button() {
  const [count, setCount] = useState(0)
  return (
      <button onClick={ () => setCount((count) => count + 1) }>
        计数器为 { count }
      </button>
  )
}

export default Button
