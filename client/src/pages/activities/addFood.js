import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_FOOD } from "../../utils/mutations";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { QUERY_FOOD } from "../../utils/queries";
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

const AddFood = () => {
  const { itemId } = useParams();
  const theme = createTheme();
  const [mealDesc, setMealDesc] = useState("");
  const [mealSession, setMealSession] = useState("");
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { data } = useQuery(
    QUERY_FOOD,

    {
      variables: { student_id: `${itemId}` },
    }
  );
  const foods = data?.getFood || [];
  console.log("food:" + JSON.stringify(foods));
  const [addFoodMutation] = useMutation(ADD_FOOD);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(true);
  };
  const uploadFood = async (event) => {
    event.preventDefault();
    try {
      //  console.log("food:"+activityType +"desc" +desc)
      const { data } = await addFoodMutation({
        variables: {
          student_id: `${itemId}`,
          mealDesc: mealDesc,
          mealSession: mealSession,
        },
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
        {foods ? (
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
                    Meal History
                  </Typography>
                </Container>
              </Box>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "lightyellow",
                }}
              > {foods.map((food) => (
                <ListItem alignItems="flex-start" style={{border:"solid lightpink .2rem"}}>
                  <ListItemText
                    primary={food.mealSession}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Description: {food.mealDesc}
                        </Typography>
                        <Typography style={{fontSize:"1rem"}}>
                        {food.day}
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
          <h3> No meal to display </h3>
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
            id="mealSession"
            label="mealSession"
            variant="outlined"
            value={mealSession}
            onChange={(event) => setMealSession(event.target.value)}
            style={{ margin: "1rem" }}
          />
          <TextField
            id="activityDesc"
            label="Description"
            variant="outlined"
            value={mealDesc}
            onChange={(event) => setMealDesc(event.target.value)}
            style={{ margin: "1rem" }}
          />
          <button
            style={{
              maxWidth: "6rem",
              height: "4rem",
              margin: "1rem",
            }}
            onClick={(event) => {
              uploadFood(event);
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
            <p>Meal added successfully</p>
          </div>
        </Modal>
      </div>
    </form>
  );
};

export default AddFood;
