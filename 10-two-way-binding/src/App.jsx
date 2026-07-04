import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  function formSubmit(e){
    e.preventDefault()
    alert("Form submitted");
    console.log("Submitted by", title);

    setTitle("")
    

  }
  return (
    <div>
      <form onSubmit={(e) =>{
        formSubmit(e)
      }}>
        <input type="text" placeholder='Enter your Name' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default App
