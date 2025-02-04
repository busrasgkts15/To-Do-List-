import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
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
import { Table } from "antd";
import Column from "antd/es/table/Column";

const UsersPage = () => {
  const [visible, setVisible] = useState(false);
  const [isOpenModal, setisOpenModal] = useState(false);
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("");
  const [updateData, setUpdateData] = useState();
  const [isUpdate, setisUpdate] = useState(false);
  const [isDelete, setisDelete] = useState(false);

  

  useEffect(() => {
    if (!isOpenModal) {
      setUpdateData({});
    }
    getTodoList();
  }, [setVisible, isOpenModal]);

  const getTodoList = () => {
    console.log("buradayım");
    TodoService.getTodo().then((res) => {
      setList(res.data);
    });
  };

  const deleteUserFunc = (id) => {
    TodoService.TodoDelete(id)
      .then((res) => {
        setVisible(true);
        getTodoList();
        setMessage("Silme Başarılı");
      })
      .catch((err) => {
        setVisible(true);
        setMessage("Silme Başarısız");
      });
  };

  const visibler = () => {
    getTodoList();
    setVisible(false);
  };

  const updateUserFunc = (data) => {
    setisOpenModal(true);
    // setUpdateData(data);
    // isUpdate(true)
    TodoService.TodoUpdate(data);
    // getTodoList();
  };

  const color = ({message}) => {
    if(message === "Silme Başarılı") {
      return "success"
    } else 
     return "danger"
    
  }

  const columns = [
    {
      selector: (row) => row.userId,
      name: "User Id",
      width: "",
      sortable: true,
    },
    {
      selector: (row) => row.userName,
      name: "Name",
      width: "",
      sortable: true,
    },
    {
      selector: (row) => row.department,
      name: "Department",
      width: "",
      sortable: true,
    },
    {
      selector: (row) => row.title,
      name: "Title",
      width: "",
    },
    {
      name: "Actions",
      width: "",
      cell: (d) => [
        <div>
          <RiDeleteBin6Line
            size={20}
            className="cursor-pointer"
            role="button"
            onClick={() => deleteUserFunc(d.id)}
          />
          <FaEdit
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
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card>
            <Alert color={color({message})} isOpen={visible} toggle={visibler}>
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
                    Görev Ekle
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardBody
              className="p-0"
              style={{ overflowY: "auto", maxHeight: "500px" }}
            >
              <Table dataSource={list}>
        <Column title="User Id" dataIndex="userId" />
        <Column title="Name" dataIndex="userName" />
        <Column title="Department" dataIndex="department" />
        <Column title="Title" dataIndex="title" />
        <Column
          title="Actions"
          render={(_, record) => (
            <>
              <RiDeleteBin6Line
                size={20}
                className="cursor-pointer"
                role="button"
                onClick={() => deleteUserFunc(record.id)}
              />
              <FaEdit
                size={20}
                className="ms-2 cursor-pointer"
                role="button"
                // onClick={() => updateUserFunc(record)}
              />
            </>
          )}
        />
      </Table>
      ;
            </CardBody>
          </Card>
        </Col>

        <DynamicModal
          data={list}
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
