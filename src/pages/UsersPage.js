import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import DynamicDataTable from "../components/DynamicDataTable";
import DynamicModal from "../components/DynamicModal";
import {
  Col,
  Row,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Alert,
} from "reactstrap";
import TodoService from "../services/TodoService";

const UsersPage = () => {
  const [visible, setVisible] = useState(false);
  const [isOpenModal, setisOpenModal] = useState(false);
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("");
  const [updateData, setUpdateData] = useState();
  const [isUpdate, setisUpdate] = useState(false);

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = () => {
    TodoService.getTodoAll().then((res) => {
      setList(res.data);
    });
  };

  const deleteUserFunc = (id) => {
    TodoService.TodoDelete(id)
      .then((res) => {
        getTodoList();
        setVisible(true);
        setMessage("Silme Başarılı");
      })
      .catch((err) => {
        setVisible(true);
        setMessage("Silme Başarısız");
      });
  };

  const visibler = () => {
    getTodoList()
    setVisible(false);
  };

  const updateUserFunc = (data) => {
    setisOpenModal(true);
    // setUpdateData(data);
    // isUpdate(true)
    // TodoService.TodoUpdate(data);
    // getTodoList();
  };

  useEffect(() => {
    if (!isOpenModal) {
      setUpdateData({});
    }
  }, [isOpenModal]);

  const columns = [
    {
      selector: (row) => row.userId,
      name: "User Id",
      width: "",
      sortable: true,
    },
    {
      selector: (row) => row.id,
      name: "Id",
      width: "",
      sortable: true,
    },
    {
      selector: (row) => row.title,
      name: "Title",
      width: "",
    },
    {
      selector: (row) => row.completed,
      name: "Completed",
      width: "",
      sortable: true,
    },
    {
      name: "Aksiyon",
      width: "",
      cell: (d) => [
        <div>
          <RiDeleteBin5Line
            size={20}
            className="cursor-pointer"
            role="button"
            onClick={() => deleteUserFunc(d.id)}
          />
          <FaRegEdit
            size={20}
            className="ms-2 cursor-pointer"
            role="button"
            onClick={() => updateUserFunc(d)}
          />
        </div>,
      ],
    },
  ];

  return (
    <>
      <Row>
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="mt-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card>
            <Alert color="success" isOpen={visible} toggle={visibler}>
              {message}
            </Alert>
            <CardHeader>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <CardTitle tag="h5" className="font-weight-bold">
                    Yapılacaklar Listesi
                  </CardTitle>
                </div>
                <div>
                  <Button
                    className="mr-5"
                    color="primary"
                    size="sm"
                    onClick={() => setisOpenModal(true)}
                  >
                    İş Ekle
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardBody
              className="p-0"
              style={{ overflowY: "auto", maxHeight: "400px" }}
            >
              <div className="mt-3">
                <DynamicDataTable columns={columns} data={list} />
              </div>
            </CardBody>
          </Card>
        </Col>

        <DynamicModal
          classname={"left-sidebar"}
          isOpen={isOpenModal}
          setIsOpen={setisOpenModal}
          title={!isUpdate ? "iş Ekle" : "işi Güncelle"}
        ></DynamicModal>
      </Row>
    </>
  );
};

export default UsersPage;
