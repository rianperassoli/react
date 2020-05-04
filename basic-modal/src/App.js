import React, { useState } from 'react'

import Modal from './components/Modal'

const App = () => {

  const [isShowing, setShowing] = useState(false)

  const openModalHandler = () => {
    setShowing(true)
  }

  const closeModalHandler = () => {
    setShowing(false)
  }

  return (
    <div>
      {isShowing ? <div onClick={closeModalHandler} className="back-drop"></div> : null}

      <button className="open-modal-btn" onClick={openModalHandler}>Open Modal</button>

      <Modal
        className="modal"
        show={isShowing}
        close={closeModalHandler}>
        Maybe aircrafts fly very because they don't want to be seen in plane sight?
      </Modal>
    </div>
  )

}

export default App
