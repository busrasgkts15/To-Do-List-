import React from "react";
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FloatButton } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { Modal } from "antd";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Modal title="Yardım" open={isModalOpen} onOk={handleOk} onCancel={handleOk}>
          <p>Yeni görev eklemek için Todo sayfasını ziyaret ediniz</p>
        </Modal>
      </div>
      <footer
        className="fixed-bottom"
        style={{ backgroundColor: "Highlight", height: 100 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: 20,
            }}
          >
            <div>
              <a>Günlük işlerinizi kolayca kontrol edin</a>

              <div>
                {" "}
                <FaFacebookSquare />
                <FaSquareInstagram />
                <FaSquareXTwitter />
              </div>
            </div>
          </div>
        </div>
        <FloatButton
          onClick={showModal}
          icon={<QuestionCircleOutlined />}
          type="primary"
          style={{ insetInlineEnd: 24 }}
        />
      </footer>
    </>
  );
};

export default Footer;
