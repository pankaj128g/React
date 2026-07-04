import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='parent'>
      <Card user="Pankaj Gorle" age={21} img="https://images.unsplash.com/photo-1777877714035-57392b1c99c4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Sarthak Sharma" age={23} img="https://images.unsplash.com/photo-1691443297137-68818fe7bce9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Rahul Sharma" age={20} img="https://images.unsplash.com/photo-1685383230186-825c693ca67c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Rajesh Pradhan" age={29} img="https://images.unsplash.com/photo-1690278505005-7481d3c1a924?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Sonam Tiwari" age={28} img="https://images.unsplash.com/photo-1720729583899-7658e63bd136?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
