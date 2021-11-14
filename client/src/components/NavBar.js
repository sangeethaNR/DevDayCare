import React, { useState } from "react";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);

  return (
    <>
      <Navbar variant="light" expand="lg" className="brand">
        <Container
          fluid
          style={{ fontFamily: "Comic Sans Ms", fontSize: "1.3rem" }}
        >
          <Navbar.Brand>
            <h1>Blossom Babies</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              {/* if user is logged in show dashboard and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/adminDashboard">
                    Dashboard
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => setShowModal(true)}>
                    Admin Portal
                  </Nav.Link>
                  <Nav.Link onClick={() => setShowTeacherModal(true)}>
                    Teacher's Portal
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set admin modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      {/* set teacher's modal up */}
      <Modal
        size="lg"
        show={showTeacherModal}
        onHide={() => setShowTeacherModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                {/* <LoginForm handleModalClose={() => setShowTeacherModal(false)} /> */}
                Teacher's Login
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                {/* <SignUpForm handleModalClose={() => setShowTeacherModal(false)} /> */}
                Teacher's Signup
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
