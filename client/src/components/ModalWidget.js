import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CreateAccount from "./CreateAccount";
import UserWidgetSelect from './UserWidgetSelect/UserWidgetSelect';
// import Pops from "../components/Popovers"; 

const ModalWidget = (props) => {
    console.log(props, "PROPS IN THE MODAL WIDGEST!!");

    const [open, setOpen] = useState(props.modal);


    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Modal isOpen={props.modal} onClose={handleClose} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: '25%',
        }}>
            <ModalBody>
                <UserWidgetSelect />
            </ModalBody>
        </Modal>
    );
}

export default ModalWidget;