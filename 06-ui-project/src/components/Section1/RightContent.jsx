import React from 'react'
import RightCards from './RightCards'

const RightContent = (props) => {

    console.log(props.users);
  return (
    <div className='h-full rounded-4xl overflow-x-auto flex-nowrap p-6 w-2/3 flex gap-6'>
        {props.users.map(function(elem, idx){
            return <RightCards key={idx} id={idx} color={elem.color} img={elem.img} button={elem.button}  text={elem.text}/>
        })}
    </div>
  )
}

export default RightContent
