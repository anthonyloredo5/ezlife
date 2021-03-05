import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CreateAccount from "./CreateAccount";
import UserWidgetSelect from './UserWidgetSelect/UserWidgetSelect';
// import Pops from "../components/Popovers"; 

const ModalWidget = (props) => {
    console.log(props, "PROPS IN THE MODAL WIDGEST!!");

    return (
        <Modal isOpen={props.modal} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: '25%'
        }}>
            <ModalBody>
                <UserWidgetSelect />
            </ModalBody>
        </Modal>
    );
}

export default ModalWidget;