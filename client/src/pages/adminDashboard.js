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

const columns = [
  { id: "username", label: "Username", minWidth: 170 },
  { id: "fullName", label: "Full Name", minWidth: 100 },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "right",
  },
  {
    id: "joined_on",
    label: "Joined On",
    minWidth: 170,
    align: "right",
  },
  {
    id: "role",
    label: "Role",
    minWidth: 170,
    align: "right",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
  },
  {
    id: "statusButton",
    label: "Change Status",
    minWidth: 170,
    align: "right",
  },
];


function createData(
  username,
  fullName,
  email,
  joined_on,
  role,
  status,
  statusButton
) {
  return { username, fullName, email, joined_on, role, status, statusButton };
}

function AdminDashboard() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [changeStatusMutation] = useMutation(CHANGE_TEACHER_STATUS);
  const { data } = useQuery(GET_ALL_TEACHERS);
  const teachers = data?.getAllTeachersForAdmin || [];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const changeTeacherStatus = async (id, status) => {
    const { data, error } = await changeStatusMutation({
      variables: {
        id,
        status,
      },
    });
  };

  const renderButton = (id, status) => {
    return status ? (
      <Button variant="outlined" color="error" onClick={() => changeTeacherStatus(id, false)}>
        Deactivate
      </Button>
    ) : (
      <Button variant="contained" onClick={() => changeTeacherStatus(id, true)}>
        Activate
      </Button>
    );
  };

  const createRowsData = () => {
    return teachers.map(
      ({
        username,
        first_name,
        last_name,
        email,
        is_active,
        is_main,
        createdAt,
        _id,
      }) => {
        return createData(
          username,
          `${first_name} ${last_name}`,
          email,
          new Date(parseInt(createdAt)).toDateString(),
          is_main ? "Teacher" : "Substitute Teacher",
          is_active ? "Active" : "InActive",
          renderButton(_id, is_active)
        );
      }
    );
  };
  console.log(createRowsData());

  return (
    <React.Fragment>
      <div style={{ border: "dotted pink 2vw", height: "100vh", padding:'2rem' }}>
    <Container style={{margin:"2rem"}}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {createRowsData()
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={createRowsData().length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
    <Link as={Link} to="/addTeacher" style={{   textDecoration: "none",
            fontFamily: "Comic Sans Ms",
            fontSize: "1.3rem",
            color: "black",
            border: "solid black .1vw",
            padding: ".25rem",
            borderRadius: "1rem",
            backgroundColor: "lightblue",
            margin: "5rem",}}>
        Add Teacher
      </Link>
    </div>
    </React.Fragment>
  );
}

export default AdminDashboard;
