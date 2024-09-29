import { useState } from "react"

export const ComponentCounter = () => {
  const [counter, setCounter] = useState<number>(0)

  const incrementCounter = ()=>{
    setCounter(counter+1)
  }
  const decrementCounter = ()=>{
    if(counter > 0){
        setCounter(counter-1)
    }

  }
  
    return (
    <div>
        <h2>Valor de counter: {counter}</h2>
        <button onClick={incrementCounter}>Incrementar</button>
        <button onClick={decrementCounter}>Decrementar</button>
    </div>
  )
}
