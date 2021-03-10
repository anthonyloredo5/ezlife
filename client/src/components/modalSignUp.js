import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CreateAccount from "./CreateAccount"; 
import Auth from '../Auth/Auth';
// import Pops from "../components/Popovers"; 

const ModalSignUp = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
console.log('PROPS IN THE MODAL SIGN UP', props)
  return (
    <div>
      <Button style={{backgroundColor: "#64b5f6", color: "black", size: "large"}} onClick={toggle}>Get started!</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} style={{backgroundColor: "#ffeb3b"}}>Create an account to simplify your life! </ModalHeader>
        <ModalBody>
          <Auth  updateUser = {props.updateUser}/>
        </ModalBody>
        {/* <ModalFooter> */}
          {/* <Button color="primary" onClick={toggle}>Select</Button>{' '} */}
          
        {/* </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default ModalSignUp;