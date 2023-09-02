import React, {useState} from 'react'
import Modal from '../Modal/Modal'
import "./Holder.css"

const Holder = (props) => {
  const [modal, setModal] = useState(true)

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

    const {image} = props
  return (
    <div className='previews'>
        <img src={image} alt='preview Image' className='preview-image' onClick={openModal}/>
        {modal && <Modal image={image} closeModal={closeModal} />}
    </div>
  )
}

export default Holder