import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useQuery, useMutation } from "@apollo/client";
import Container from "@mui/material/Container";
import { GET_ALL_TEACHERS, GET_TEACHER_PROFILE } from "../utils/queries";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

function TeacherDashboard() {
  const user_id = Auth.getProfile()?.data._id;
  const { data, error } = useQuery(GET_TEACHER_PROFILE, {
    variables: {
      id: user_id,
    },
  });
  const userDetails = data?.getTeacherProfile || {};
  console.log(userDetails);
  return (
    <React.Fragment>
      <Link as={Link} to="/activities">
        Activities
      </Link>
      {userDetails.is_active ? (
        <h1>Teacher dadhboard accessible</h1>
      ) : (
        <h1>Your profile is inactive waiting for activatruon</h1>
      )}
    </React.Fragment>
  );
}

export default TeacherDashboard;
