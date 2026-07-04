import React from 'react'

const App = () => {

  function formSubmit(e){
    e.preventDefault()
    alert("Form submitted");
    console.log("Submitted");
    

  }
  return (
    <div>
      <form onSubmit={(e) =>{
        formSubmit(e)
      }}>
        <input type="text" placeholder='Enter your Name' />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default App
