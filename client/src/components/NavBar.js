import React, { useState, useContext } from "react";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import LoginForm from "./LoginForm";
import TeacherSignUpForm from "./TeachersForm/SignupForm";
import { Link, useParams, Redirect, withRouter } from "react-router-dom";
import { useDashboard } from "../components/AppContext";
import Auth from "../utils/auth";
import SignUpForm from "./SignupForm";

const AppNavbar = (props) => {
  // const { is_teacher: userParam } = useParams();
  //const {isTeacher,handleDashboardView} = useDashboard();
  const pathname = props.location.pathname;
  const userDetails = Auth.getProfile()?.data;

  // set modal display state
  const [isTeacher, setIsTeacher] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);

  return (
    <>
      {pathname !== "/teacherDashboard" && pathname !== "/adminDashboard" && (
        <Navbar variant="light" expand="lg" className="brand">
          <Container
            fluid
            style={{ fontFamily: "Comic Sans Ms", fontSize: "1.3rem" }}
          >
            {/* TO DO:link to home page */}
            <Navbar.Brand>
              <h1>Blossom Babies</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav className="ml-auto">
                {/* if user is logged in show dashboard and logout */}
                {/* {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/adminDashboard">
                    Dashboard
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => {setShowModal(true);setIsTeacher(false)}}>
                    Admin Portal
                  </Nav.Link>
                  <Nav.Link onClick={() =>{ setShowTeacherModal(true) ;setIsTeacher(true)}}>
                    Teacher's Portal
                  </Nav.Link>
                </>
              )} */}

                <div>
                  {/* {userDetails?.is_admin ? (
                  <>
                    <Nav.Link as={Link} to="/adminDashboard">
                      Admin Dashboard
                    </Nav.Link>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/teacherDashboard">
                      Teacher Dashboard
                    </Nav.Link>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </>
                )} */}
                  {(() => {
                    if (Auth.loggedIn()) {
                      console.log("showTeacherModal:" + showTeacherModal);
                      if (userDetails && !userDetails.is_admin) {
                        return (
                          <>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "column",
                              }}
                            >
                              <Nav.Link as={Link} to="/teacherDashboard">
                                Teacher Dashboard
                              </Nav.Link>
                              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                            </div>
                          </>
                        );
                      } else {
                        return (
                          <>
                          
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "column",
                              }}
                            >
                              <Nav.Link as={Link} to="/adminDashboard">
                                Admin Dashboard
                              </Nav.Link>
                              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                            </div>
                          </>
                        );
                      }
                    } else {
                      return (
                        <>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "column",
                            }}
                          >
                            <Nav.Link
                              onClick={() => {
                                setShowModal(true);
                              }}
                            >
                              Admin Portal
                            </Nav.Link>
                            <Nav.Link
                              onClick={() => {
                                setShowTeacherModal(true);
                              }}
                            >
                              Teacher Portal
                            </Nav.Link>
                          </div>
                        </>
                      );
                    }
                  })()}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      {/* set admin modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
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
                <LoginForm
                  handleModalClose={() => setShowModal(false)}
                  adminLogin={true}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
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
                <LoginForm
                  handleModalClose={() => {
                    setShowModal(false);
                  }}
                  adminLogin={false}
                />
                Teacher's Login
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <TeacherSignUpForm
                  handleModalClose={() => setShowModal(false)}
                />
                Teacher's Signup
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default withRouter(AppNavbar);
