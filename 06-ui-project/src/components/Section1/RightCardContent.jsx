import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute h-full w-full top-0 left-0 p-5 flex-col flex justify-between'>
        <h2 className='bg-white rounded-full h-8 w-8 flex justify-center items-center text-lg font-medium '>{props.id+1}</h2>
        <div>
            <p className='text-white font-sans text-shadow-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic repellendus dignissimos qui sint sunt deleniti!</p>
            <div className='flex justify-between pt-10'>
                <button style={{backgroundColor:props.color}} className=' w-35 rounded-full px-4 py-2 text-white font-medium'>{props.button}</button>
                <button style={{backgroundColor:props.color}} className=' rounded-full text-white font-bold text-lg h-12 w-12'><i class="ri-arrow-right-line"></i></button>
            </div>
            </div>
        </div>
  )
}

export default RightCardContent
