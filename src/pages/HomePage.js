import React, { useEffect, useState } from "react";
import TodoService from "../services/TodoService";
import { Space, Table } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";

const HomePage = () => {
  
  return (
    <>
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Ana Sayfaya Hoş Geldiniz
      </h2>
    </>
  );
};

export default HomePage;
