import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Col,
  Row,
  FormGroup,
  Label,
  Button,
  ModalFooter,
  Form,
  Input,
} from "reactstrap";

const DynamicModal = ({ classname, isOpen, setIsOpen, title , data}) => {
  const toogle = () => {
    setIsOpen(false);
    console.log("busra", data)
  };


  return (
    <>
      <Modal isOpen={isOpen} toggle={toogle}>
        <ModalHeader toggle={toogle}>{title}</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleEmail">User Id</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder=""
                    type="number"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Id</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder=""
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md={9}>
                <FormGroup>
                  <Label for="examplePassword">Title</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check>
              <Input id="exampleCheck" name="check" type="checkbox" />
              <Label check for="exampleCheck">
                Completed
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toogle}>
            Submit
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
