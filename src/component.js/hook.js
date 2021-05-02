import React, {useState} from 'react'
function Hook() {
    // Declaration de useState (Destraction)

// count=0
// count=count+1
    const [count , setCount] = useState(0)
    const [input , setInput] = useState(null)
  function  HandleChange  ()  {
      setCount(count+1)

    }

  const getInput =  (event) => {
        
  setInput(event.target.value)
      }
    return(
        <div>
            <h1>hello Hook</h1>
            <input type="text" onChange={getInput} />
            <h2>My name is {input}</h2>
            <button onClick = { HandleChange}>counter{count}</button>
            <button onClick = { ()=>setCount(count-1)}>counteur{count}</button>
        </div>
    )
    
}
export default Hook