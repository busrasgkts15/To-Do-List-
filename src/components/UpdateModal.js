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

const UpdateModal = ({ isOpen, setisOpen, data, getTodoList, setupdateData }) => {
  console.log("okan12",data)


  const [username, setusername] = useState("") // alttaki efektin alernatifi
  const [departmant, setDepartmant] = useState(data?.department || "")
  const [title, setTitle] = useState(data?.title)

  useEffect(() => {
    if(data){
      setusername(data.userName);
    }

  }, [data])
  
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Gönderilen veri:", event);
    

    const request = {
      userId: data.id,
      userName: username,
      department:departmant,
      title: title,
    }

    if(data){
      TodoService.TodoUpdate(request).then(res => {
        getTodoList()
        
      })
    }else{
      TodoService.TodoPost(request).then(res => {
        getTodoList()
        
      })
    }

   
    
    setisOpen(false); // Modal'ı kapat
    

  };

  const toggle = () => {
    setupdateData(null)
    setisOpen(false);

  };

  const handleChange = (e) => {
    setusername(e.target.value);
  };
  const handleChangeDepartmant = (e) => {
    setDepartmant(e.target.value);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };


  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalHeader>Kişinin Görevini Güncelle</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="username"
                    type="text"
                    // defaultValue={data.userName}
                    value={username}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Department</Label>
                  <Input
                    id="department"
                    type="text"
                    // defaultValue={data?.department}
                    value={departmant}
                    onChange={handleChangeDepartmant}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Title</Label>
                  <Input
                    id="title"
                    type="text"
                    // defaultValue={data?.title}
                    value={title}
                    onChange={handleChangeTitle}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Button color="primary" type="submit">
                  Submit
                </Button>
                <Button color="secondary" type="button" onClick={toggle}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </ModalBody>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateModal;
