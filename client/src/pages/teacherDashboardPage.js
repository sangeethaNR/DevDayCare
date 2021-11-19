import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TEACHER_PROFILE } from "../utils/queries";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import TeacherDashboard from "../components/TeacherDashboard";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";

function TeacherDashboardPage() {
  const user_id = Auth.getProfile()?.data._id;
  const { data } = useQuery(GET_TEACHER_PROFILE, {
    variables: {
      id: user_id,
    },
  });
  const userDetails = data?.getTeacherProfile || {};
  return (
    <React.Fragment>
         <Navbar variant="light" expand="lg" className="brand">
          <Container
            fluid
            style={{ fontFamily: "Comic Sans Ms", fontSize: "1.3rem" }}
          >
            {/* TO DO:link to home page */}
            <Navbar.Brand>
              <h1>Blossom Babies</h1>
            </Navbar.Brand>
            </Container>
        </Navbar>
      <div style={{ border: "dotted pink 2vw", height: "100vh", padding:'2rem' }}>
        {userDetails.is_active ? (
          <TeacherDashboard user_id={user_id}/>
        ) : (
          <h1>Your profile is inactive waiting for activation</h1>
        )}
      </div>
    </React.Fragment>
  );
}

export default TeacherDashboardPage;
