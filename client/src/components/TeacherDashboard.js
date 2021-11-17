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
import { GET_ALL_TEACHERS, GET_CLASS_INFO } from "../utils/queries";
import { CHANGE_TEACHER_STATUS } from "../utils/mutations";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const columns = [
  { id: "student_name", label: "Student Name", minWidth: 170 },
  { id: "food", label: "Food", minWidth: 100 },
  {
    id: "activity",
    label: "Activity",
    minWidth: 170,
    align: "right",
  },
  {
    id: "parents",
    label: "Parents",
    minWidth: 170,
    align: "right",
  },
  {
    id: "assistants",
    label: "Assistants",
    minWidth: 170,
    align: "right",
  },
];

function createData(student_name, food, activity, parents, assistants) {
  return { student_name, food, activity, parents, assistants };
}

function TeacherDashboard({ user_id }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data } = useQuery(GET_CLASS_INFO, {
    variables: {
      teacherId: user_id,
    },
  });
  const classRooms = data?.getClassRoom || [];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const renderParentColumn = (parents) => {
    return parents.map((p) => p.parentName);
  };

  const createRowsData = () => {
    if (classRooms[0] && classRooms[0].students.length) {
      return classRooms[0].students.map((item) => {
        console.log(renderParentColumn(item.parents));

        return createData(
          item.name,
          "view",
          <Link to={`/activities/${item._id}`  }>View Activity</Link>,
          renderParentColumn(item.parents),
          classRooms[0].teachers[0].username
        );
      });
    }
  };

  return (
    <React.Fragment>
    <Container style={{margin:"2rem"}}>
      {createRowsData()?.length && (
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
      )}
    </Container>
    </React.Fragment>
  );
}

export default TeacherDashboard;
