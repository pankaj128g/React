import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = (props) => {

  const users = [
    {
      img:"https://images.unsplash.com/photo-1747741744139-663023d082bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      button:"Satisfied",
      color:"blue",
      text:""},
     {
      img:"https://images.unsplash.com/photo-1762341104634-998bbee0ccba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      button:"Underserved",
      color:"black",
      text:""},

     {
      img:"https://images.unsplash.com/photo-1620638237210-6d63c716b006?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      button:"Average",
      color:"darkorange",
      text:""},

      {
      img:"https://images.unsplash.com/photo-1634423865479-4cf603a6b2d4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      button:"Moderate",
      color:"navy",
      text:""},

      {
      img:"https://plus.unsplash.com/premium_photo-1731966052107-85f56ecdf47a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      button:"Solid",
      color:"YellowGreen",
      text:""},

      {
      img:"https://plus.unsplash.com/premium_photo-1661508261081-5c8e37b5bc4d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      button:"Underated",
      color:"purple",
      text:""}
  ];
  return (
       <div>
         <Section1 users={users}/>
         <Section2 />
       </div>
  )
}

export default App
