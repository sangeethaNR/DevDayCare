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
import { QUERY_NOTES } from "../../utils/queries";
import { ADD_NOTES } from "../../utils/mutations";
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

const Notes = () => {
  const { itemId } = useParams();
  const theme = createTheme();
  const [noteDesc, setNoteDesc] = useState("");

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { data } = useQuery(
    QUERY_NOTES,

    {
      variables: { student_id: `${itemId}` },
    }
  );
  const notes = data?.getNotes || [];
  console.log("food:" + JSON.stringify(notes));
  const [addNotesMutation] = useMutation(ADD_NOTES);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(true);
  };
  const uploadNotes = async (event) => {
    event.preventDefault();
    try {
      //  console.log("food:"+activityType +"desc" +desc)
      const { data } = await addNotesMutation({
        variables: { student_id: `${itemId}`, noteDesc: noteDesc },
      });
      console.log(JSON.stringify(data));
      if (!data) {
        throw new Error("something went wrong!");
      }
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
        {notes ? (
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
                    Notes
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
                {notes.map((note) => (
                  <ListItem
                    item
                    key={note._id}
                    alignItems="flex-start"
                    style={{ border: "solid lightpink .2rem" }}
                  >
                    <ListItemText
                      primary={note.noteDesc}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Description: {note.noteDesc}
                          </Typography>
                          <Typography style={{ fontSize: "1rem" }}>
                            {note.day}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
              
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
          <h3> No notes to display </h3>
        )}
<div
          style={{
            border: "solid black .2vh",
            margin: "3rem",
            maxHeight: "20%",
            width: "40%",
            padding:"1rem"
          }}
        >
        <TextField
          id="activityDesc"
          label="Description"
          variant="outlined"
          value={noteDesc}
          onChange={(event) => setNoteDesc(event.target.value)}
          style={{ margin: "1rem" }}
        />
        <button
          style={{ maxWidth: "6rem", height: "4rem", marginRight: "1rem" }}
          onClick={(event) => {
            uploadNotes(event);
          }}
        >
          Upload 
        </button>
          </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2>Success</h2>
            <p>Note added successfully</p>
          </div>
        </Modal>
      </div>
    </form>
  );
};

export default Notes;

