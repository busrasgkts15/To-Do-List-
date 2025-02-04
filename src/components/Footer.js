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

import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
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
          <div style={{margin: 20}}>
            Detaylar İçin
            <a href="/todo" style={{textDecoration: "none" ,color:"black"}}> Todo sayfasını ziyaret edin</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
