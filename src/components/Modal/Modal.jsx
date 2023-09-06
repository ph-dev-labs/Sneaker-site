import React from 'react'
import "./Modal.css"

const Modal = ({image, closeModal}) => {

   
  return (
    
    <div className="modal">
      <div className="modal-content">
        <img src={image} alt="Modal"  className='img'/>
        <div className='x-btn' onClick={closeModal}>X</div>
      </div>
    </div>
  )
}

export default Modal