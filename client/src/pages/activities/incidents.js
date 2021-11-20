import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { QUERY_INCIDENTREPORT } from "../../utils/queries";
import { ADD_INCIDENTREPORT } from "../../utils/mutations";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Incidents = () => {
  const { itemId } = useParams();
  const theme = createTheme();
  const [desc, setDesc] = useState("");

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { data, refetch } = useQuery(
    QUERY_INCIDENTREPORT,
    
    {
      variables: { student_id: `${itemId}` },
    }
  );
  const incidentReports = data?.getIncidentReport || [];
  console.log("incidentReport:" + JSON.stringify(incidentReports));
  const [addIRMutation] = useMutation(ADD_INCIDENTREPORT);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // window.location.reload(true);
  };
  const uploadIR = async (event) => {
    event.preventDefault();
    try {
      console.log("desc" + desc);
      const { data } = await addIRMutation({
        variables: { student_id: `${itemId}`, desc: desc },
      });
      console.log(JSON.stringify(data));
      if (!data) {
        throw new Error("something went wrong!");
      }
      refetch()
      handleOpen();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form style={{ border: "dotted pink 2vw" }}>
      <div
        className="form-box"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {incidentReports ? (
          <ThemeProvider theme={theme}>
            <main>
              <Box
                sx={{
                  bgcolor: "background.paper",
                }}
              >
                <Container maxWidth="sm">
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    fontFamily="Comic Sans Ms"
                    gutterBottom
                  >
                    Incident Report
                  </Typography>
                </Container>
              </Box>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "lightyellow",
                }}
              >
                {" "}
                {incidentReports.map((incidentReport) => (
                  <ListItem
                    item
                    key={incidentReport._id}
                    alignItems="flex-start"
                    style={{ border: "solid lightpink .2rem" }}
                  >
                    <ListItemText
                      primary={incidentReport.desc}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {incidentReport.day}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  // <Divider variant="inset" component="li" />
                ))}
              </List>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
              {/* <Copyright /> */}
            </Box>
            {/* End footer */}
          </ThemeProvider>
        ) : (
          <h3> No Incident Report to display </h3>
        )}
     <div
          style={{
            border: "solid black .2vh",
            margin: "3rem",
            maxHeight: "35%",
            width: "40%",
          }}
        >
        <TextField
          id="incidentReport"
          label="Description"
          variant="outlined"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
          style={{ margin: "1rem" }}
        />
        <button
          style={{ maxWidth: "6rem", height: "4rem", margin: "2rem" }}
          onClick={(event) => {
            uploadIR(event);
          }}
        >
          Upload 
        </button>
        </div>

        {/* <Image cloudName= "dhcq7qcuc" publicId=""/> */}

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2>Success</h2>
            <p>Incidents added successfully</p>
          </div>
        </Modal>
      </div>
    </form>
  );
};

//     return (
//         <form>
//       <div class="form-box" style={{border: "dotted pink 2vw"}} variant="outlined" gutterBottom>
//       <label for="desc">Incident:</label>
//       <input placeholder="write report here" maxlength="28" type="text" />
//       <button type="submit">Submit</button>
//       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <ListItem alignItems="flex-start">
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemText
//           primary={
//             <React.Fragment>
//               {"PREVIOUS INCIDENTS"}
//             </React.Fragment>
//           }
//         />
//         <Divider variant="inset" component="li" />
//       </ListItem>
//     </List>
//     </div>
//     </form>
//   );
// }

export default Incidents;
