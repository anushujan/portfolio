import './BackImg2Styles.css'

import React from 'react'

const BackImg2 = (props) => {
  return (
    <div className='back-img'>
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default BackImg2