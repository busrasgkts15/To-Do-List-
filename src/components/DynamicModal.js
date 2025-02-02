import React from "react";
import { Modal, ModalBody, ModalHeader, Button, ModalFooter } from "reactstrap";

const DynamicModal = ({ classname, isOpen, setIsOpen, title }) => {
  const toogle = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} toggle={toogle}>
        <ModalHeader toggle={toogle}>{title}</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toogle}>
            Kaydet
          </Button>{" "}
          <Button color="secondary" onClick={toogle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DynamicModal;
