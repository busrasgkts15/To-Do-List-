import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import DynamicDataTable from "../components/DynamicDataTable";
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
import UpdateModal from "../components/UpdateModal";
import { data } from "react-router";

const UsersPage = () => {
  const [visible, setVisible] = useState(false);
  const [isOpenModal, setisOpenModal] = useState(false);
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("");
  const [isUpdate, setisUpdate] = useState(false);
  const [isDelete, setisDelete] = useState(false);
  const [updateData, setupdateData] = useState();

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = () => {
    TodoService.getTodo().then((res) => {
      setList(res.data);
      console.log("okanREs", res.data);
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
    // getTodoList();
    // setVisible(false);
  };

  const updateUserFunc = (data) => {
    setupdateData(data);
    setisOpenModal(true);
  };

  const color = ({ message }) => {
    if (message === "Silme Başarılı") {
      return "success";
    } else return "danger";
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      dataIndex: "aciton",
      key: "aciton",
      render: (_, record) => (
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
            onClick={() => updateUserFunc(record)}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <div>
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
              {/* <Alert
              color={color({ message })}
              isOpen={visible}
              toggle={visibler}
            >
              {message}
            </Alert> */}
              <CardHeader>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
                <Table dataSource={list} columns={columns}>
                  {/* <Column title="User Id" dataIndex="userId" />
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
                          onClick={() => updateUserFunc(record)}
                        />
                      </>
                    )}
                  /> */}
                </Table>
              </CardBody>
            </Card>
            {isOpenModal && (
              <UpdateModal
                isOpen={isOpenModal}
                setisOpen={setisOpenModal}
                data={updateData}
                getTodoList={getTodoList}
                setupdateData={setupdateData}
              />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UsersPage;
