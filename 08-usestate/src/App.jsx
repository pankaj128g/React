import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum]= useState({users:"Pankaj", age:20})

  const btnClicked= ()=> {
    const newNum={num};
    newNum.age=25
    newNum.users="gorle"
    console.log(newNum);
    
    setNum(newNum)
  }


  return (
    <div>
      <h1>{num.users}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )

}
export default App
