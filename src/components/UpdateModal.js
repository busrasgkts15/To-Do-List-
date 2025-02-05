import React, { memo, useEffect } from "react";
import TodoService from "../services/TodoService";
import { useState } from "react";
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

const UpdateModal = ({ isOpen, setisOpen, data }) => {
  const todoPost = (data) => {
    
    console.log("modalda", data);
    TodoService.TodoPost(data);
  };

  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalHeader>Kişinin Görevini Güncelle</ModalHeader>
        <Form onSubmit={todoPost}>
          <ModalBody>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    id="username"
                    type="text"
                    defaultValue={data?.userName}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Department</Label>
                  <Input
                    id="department"
                    type="text"
                    defaultValue={data?.department}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Title</Label>
                  <Input id="title" type="text" defaultValue={data?.title} />
                </FormGroup>
              </Col>
            </Row>
            <Button color="primary" type="submit">
              Submit
            </Button>
            <Button color="secondary">Cancel</Button>
          </ModalBody>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateModal;
