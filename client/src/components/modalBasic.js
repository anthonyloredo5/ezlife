import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import Pops from "../components/Popovers"; 

const ModalStart = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
       
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Select</Button>{' '}
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalStart;