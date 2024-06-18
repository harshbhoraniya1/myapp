import React, { useState } from 'react'

export const Counter = () => {
    const [counter,changeCounter] = useState(0);
    const add =() =>{
        changeCounter(counter+1)
    }
    const remove =() =>{
        changeCounter(counter-1)
    }
  return (
    <div>
        {counter}
        <button onClick={add}>+</button>
        <button onClick={remove}>-</button>
    </div>
  )
}
