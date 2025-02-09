import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavLink } from "reactstrap";
import { FcApproval } from "react-icons/fc";

function Header() {
  return (
    <div>
      <Navbar>
        <Nav>
          <FcApproval />

          <NavbarBrand href="/">reactstrap</NavbarBrand>

          <NavLink href="/todo">To do</NavLink>

          <NavLink href="/hook">Hook Form</NavLink>

          <NavLink href="https://github.com/busrasgkts15">
            GitHub
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
