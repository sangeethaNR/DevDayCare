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
      <Link as={Link} to="/addStudent" style={{textDecoration:"none", padding:"10px", fontFamily: "Comic Sans Ms", fontSize: "1.3rem", color:"black" }}>
        Add Student
      </Link>
      {userDetails.is_active ? (
        <TeacherDashboard user_id={user_id} />
      ) : (
        <h1>Your profile is inactive waiting for activation</h1>
    
      )}
      {/* TO DO: add activities into logic for teacher profile and direct to each student by id */}
      {/* <Link as={Link} to="/activities" style={{textDecoration:"none", padding:"10px", fontFamily: "Comic Sans Ms", fontSize: "1.3rem", color:"black" }}>
        Activities
      </Link> */}
    </React.Fragment>
  );
}

export default TeacherDashboardPage;
