import React from 'react'
import "./Holder.css"

const Holder = (props) => {
    const {image} = props
  return (
    <div className='previews'>
        <img src={image} alt='preview Image' className='preview-image' />
    </div>
  )
}

export default Holder