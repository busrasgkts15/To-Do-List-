import React from "react";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

const Header = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand href="/">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <FaHome></FaHome>
            </div>
            <div>
              <NavbarText>To DO LİST</NavbarText>
            </div>
          </div>
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default Header;
