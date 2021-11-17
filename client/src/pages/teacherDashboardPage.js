import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TEACHER_PROFILE } from "../utils/queries";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import TeacherDashboard from "../components/TeacherDashboard";

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
      <div style={{ border: "dotted pink 2vw", height: "100vh", padding:'2rem' }}>
        {userDetails.is_active ? (
          <TeacherDashboard user_id={user_id}/>
        ) : (
          <h1>Your profile is inactive waiting for activation</h1>
        )}
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
        <Link
          as={Link}
          to="/addStudent"
          style={{
            textDecoration: "none",
            fontFamily: "Comic Sans Ms",
            fontSize: "1.3rem",
            color: "black",
            border: "solid black .1vw",
            padding: ".25rem",
            borderRadius: "1rem",
            backgroundColor: "lightblue",
            margin: "5rem",
          }}
        >
          Add Student
        </Link>
        <Link
          as={Link}
          to="/addClassroom"
          style={{
            textDecoration: "none",
            fontFamily: "Comic Sans Ms",
            fontSize: "1.3rem",
            color: "black",
            border: "solid black .1vw",
            padding: ".25rem",
            borderRadius: "1rem",
            backgroundColor: "lightblue",
            margin: "5rem",
          }}
        >
          Add Classroom
        </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TeacherDashboardPage;
