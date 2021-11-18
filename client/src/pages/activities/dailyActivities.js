import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_ACTIVITY } from "../../utils/mutations";
import Alert from "@material-ui/lab/Alert";
import { TextField } from "@material-ui/core";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { QUERY_ACTIVITY } from "../../utils/queries";

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

const DailyActivities = () => {
  const { itemId } = useParams();
  const theme = createTheme();
  const [desc, setDesc] = useState("");
  const [activityType, setActivityType] = useState("");
  // const [activityState,setActivityState] = useState({
  //   activityType:'',
  //   desc:''
  // });
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { data } = useQuery(
    QUERY_ACTIVITY,

    {
      variables: { student_id: `${itemId}` },
    }
  );
  const activities = data?.getActivities || [];
  console.log("activity:" + JSON.stringify(activities));
  const [addActivityMutation] = useMutation(ADD_ACTIVITY);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(true);
  };
  const uploadActivity = async (event) => {
    event.preventDefault();
    try {
      console.log("activityType:" + activityType + "desc" + desc);
      const { data } = await addActivityMutation({
        variables: {
          student_id: `${itemId}`,
          activityType: activityType,
          desc: desc,
          day: "",
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
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === 'activityType' && value.length <= 280) {
  //     setActivityState({ ...activityState, [name]: value });

  //   } else if (name !== 'desc') {
  //     setActivityState({ ...activityState, [name]: value });
  //   }
  // };
  // useEffect(() => {
  //   uploadActivity()
  // },[activityState])
  return (
    <form style={{ border: "dotted pink 2vw" }}>
      <div
        className="form-box"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {activities ? (
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
                    Student Activity ...
                  </Typography>
                </Container>
              </Box>
              <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {activities.map((activity) => (
                    <Grid item key={activity._id} xs={12} sm={6} md={4}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          width:"100%"
                        }}
                      >
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"bold"}}>
                            {activity.activityType}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="h6" style={{fontSize:".8rem"}}>
                            {activity.day}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="h2">
                            {activity.desc}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
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
        <div     style={{
            border: "solid black .2vh",
            margin: "3rem",
            maxHeight: "45%",
            width: "40%",
          display:'flex',
          flexDirection:"column"
          }}>
          <TextField
            id="activityType"
            label="activityType"
            variant="outlined"
            value={activityType}
            onChange={(event) => setActivityType(event.target.value)}
            style={{ margin: "1rem" }}
          />
          <TextField
            id="activityDesc"
            label="Description"
            variant="outlined"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            style={{ margin: "2rem" }}
          />
          <button
            style={{ maxWidth: "6rem", height: "4rem", marginRight: "1rem", alignSelf:"center" }}
            onClick={(event) => {
              uploadActivity(event);
            }}
          >
            Upload Activity
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
            <p>Activity added successfully</p>
          </div>
        </Modal>
      </div>
    </form>
  );
};

export default DailyActivities;
