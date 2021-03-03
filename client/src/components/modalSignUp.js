import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import Pops from "../components/Popovers"; 

const ModalSignUp = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Sign Up!</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Sign up with ez Life</ModalHeader>
        <ModalBody>
       
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Select</Button>{' '}
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalSignUp;