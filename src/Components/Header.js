import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      className={"header"}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
      <Link to="/" className="navbar-brand">
        Admin DashBoard
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown> */}
        </Nav>
        <Nav>
          <li className={"nav-item"}>
            <NavLink to="/SignUp" className={"nav-link"}>
              SignUp
            </NavLink>
          </li>
          <li className={"nav-item"}>
            <NavLink to="/SignIn" className={"nav-link"}>
              SignIn
            </NavLink>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
