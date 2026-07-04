import React from 'react'
import RightCardContent from './RightCardContent'

const RightCards = (props) => {
  return (
    <div className='h-full shrink-0 w-70 overflow-hidden relative rounded-4xl'> 
    <img className='h-full w-full object-cover' src={props.img} alt="" />  


    <RightCardContent button={props.button} color={props.color} id={props.id}/>
    </div>
  )
}

export default RightCards
