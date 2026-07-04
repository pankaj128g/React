import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  
  console.log(props.users);
  return (
    <div className='p-10 pt-0 flex gap-10 h-[86vh] w-full'>
      

      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}
export default Page1Content
