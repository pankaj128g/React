import React from 'react'
import {Bookmark} from 'lucide-react'

function Card(props) {
  return (
    <div className='parent'>
      <div className='card'>
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save   <Bookmark size={15}></Bookmark></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.datepost}</span></h3>
          <h4>{props.post1}</h4>
          <div className='center_2'>
            <h5>{props.tag11}</h5>
            <h5>{props.tag22}</h5>
          </div>
        </div>
        <div className="bottom">
          <h3>{props.pay}</h3>
          <button>Apply Now</button>
        </div>
        <p>{props.location}</p>
      </div>
    </div>
  )
}

export default Card
