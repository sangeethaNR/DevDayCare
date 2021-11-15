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
import { GET_ALL_TEACHERS } from "../utils/queries";
import { CHANGE_TEACHER_STATUS } from "../utils/mutations";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function teacherDashboard() {
  return (
    <React.Fragment>
      <Link as={Link} to="/activities">
        Activities
      </Link>
      <h1>Your profile is inactive waiting for activatruon</h1>
    </React.Fragment>
  );
}

export default teacherDashboard;
