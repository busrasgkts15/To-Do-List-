import React, { useEffect } from "react";
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
import { Controller, useForm } from "react-hook-form";
import {  containsOnlyNumbers, isEnglishLettersOnly } from "../utills/inputControl";

const HookFormModal = ({ isOpen }) => {
  const {
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm();
  

  const setValueControl = () => {
    console.log("okangetValues", getValues()); // değerleri öğrenmek için
    setValue("department", "şlasdlşaslşdşlasşldalşsdş"); // değer setlemek için
  };

  const onSubmit = (data) => {
    console.log("bus data:", data);
  };

  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalHeader>Kişiyi Güncelle</ModalHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Controller
                    name="name"
                    control={control}
                    // rules={{ required: true }}
                    rules={{
                      required: "Bu alan zorunludur.",
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Sadece İngilizce harfler kullanılabilir.",
                      },
                    }}
                    render={({ field }) => (
                      <Input {...field} invalid={errors.name} />
                    )}
                  />
                  {errors.name && (
                    <p style={{ color: "red" }}>{errors.name.message}</p>
                  )}
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Department</Label>
                  <Controller
                    name="department"
                    control={control}
                    rules={{
                      required: "department alanının girilmesi zorunludur.",
                      validate: (value) =>
                        isEnglishLettersOnly(value) ||
                        "Sadece İngilizce harfler girilebilir.",
                    }}
                    render={({ field }) => <Input {...field} />}
                  />
                  {errors.department && (
                    <p style={{ color: "red" }}>
                      {errors.department.message}
                    </p>
                  )}
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Title</Label>
                  <Controller
                    name="title"
                    control={control}
                    rules={{ required: "title alanının girilmesi zorunludur." }}
                    render={({ field }) => <Input {...field} onKeyDown={containsOnlyNumbers}  />}
                  />
                  {errors.title && (
                    <p style={{ color: "red" }}>
                      Title alanının girilmesi zorunludur.
                    </p>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Button color="primary" type="submit">
                  Submit
                </Button>
                <Button color="secondary" type="button">
                  Cancel
                </Button>
                <Button
                  color="secondary"
                  type="button"
                  onClick={() => setValueControl()}
                >
                  setValue
                </Button>
              </Col>
            </Row>
          </ModalBody>
        </Form>
      </Modal>
    </>
  );
};

export default HookFormModal;
