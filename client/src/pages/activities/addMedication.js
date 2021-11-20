import React, {useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { QUERY_MEDICATION } from "../../utils/queries";
import {ADD_MEDICATION} from "../../utils/mutations";
import MedicationList from "../../components/MedicationList";
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

const AddMedication = () => {
  const { itemId } = useParams();
  const theme = createTheme();
  const [medName, setMedName] = useState("");
  const [dosage, setDosage] = useState("");
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [addMedicationMutation]  = useMutation(ADD_MEDICATION)
  const { data } = useQuery(
    QUERY_MEDICATION,

    {
      variables: { _id: `${itemId}` },
    }
  );
  const StudentInfo = data?.getMedication || [];
  console.log("medication:" + JSON.stringify(StudentInfo));
  //   const [addMedicationMutation] = useMutation(ADD_MEDICATION);
  const handleOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
    window.location.reload(true);
  };
  const uploadMedication = async (event) => {
    event.preventDefault();
    try {
       console.log("medName:"+medName +"dosafe" +dosage)
      const {data} = await addMedicationMutation({variables:{_id:`${itemId}`,medName:medName,
      dosage:dosage}});
      console.log(JSON.stringify(data));
      if (!data) {

        throw new Error("something went wrong!");

      }
      setMedName("");
      setDosage("")
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
        {StudentInfo ? (
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
                    Student Medication
                  </Typography>
                </Container>
              </Box>
              {/* <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "lightyellow",
                }}
              > */}
                {" "}
                {StudentInfo.map((med, i) => (
                  <ListItem
                    item
                    key={med._id}
                    alignItems="flex-start"
                    style={{ border: "solid lightpink .2rem" }}
                  >
                  <MedicationList medications={med.medications} />
                  </ListItem>
                  // <Divider variant="inset" component="li" />
                ))}
              {/* </List> */}
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
              {/* <Copyright /> */}
            </Box>
            {/* End footer */}
          </ThemeProvider>
        ) : (
          <h3> No Activity to display </h3>
        )}
        <div
          style={{
            border: "solid black .2vh",
            margin: "3rem",
            maxHeight: "35%",
            width: "50%",
            display:"flex",
            flexDirection:"column",
          }}
        >
          <TextField
            id="medicationName"
            label="Medication Name"
            variant="outlined"
            value={medName}
            onChange={(event) => setMedName(event.target.value)}
            style={{ margin: "1rem" }}
          />
          <TextField
            id="Dosage"
            label="Dosage"
            variant="outlined"
            value={dosage}
            onChange={(event) => setDosage(event.target.value)}
            style={{ margin: "1rem" }}
          />
          <button
            style={{ maxWidth: "6rem", height: "4rem", margin: "1rem", padding: "1rem" }}
            onClick={(event) => {
              uploadMedication(event);
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
            <p>Medication added successfully</p>
          </div>
        </Modal>
      </div>
    </form>
  );
};

export default AddMedication;
