import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = (e, values) => {

    toggleModal();
    alert(
      `username: ${e.target[0].value} Password: ${e.target[1].value} Rememvber: ${e.target[2].checked}`
    );
    e.preventDefault();
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }


  return (
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristorante Con Fusion"
            />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact
                  Us
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto">
              <NavItem>
                <Button outline onClick={toggleModal}>
                  <span className="fa fa-sign-in fa-lg">login</span>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <div>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create
                a unique fusion experience. Our lipsmacking creations will
                tickle your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"

              ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">password</Label>
              <Input
                type="password"
                name="password"
                id="password"

              ></Input>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="remember"

                ></Input>
                Remember me
              </Label>
            </FormGroup>
            <FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Header;
