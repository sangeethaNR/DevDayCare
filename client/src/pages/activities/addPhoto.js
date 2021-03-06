import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_PHOTO } from "../../utils/mutations";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { QUERY_PHOTOS } from "../../utils/queries";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

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

// TO DO:add logic to upload photo

const AddPhoto = () => {
  const theme = createTheme();
  const { itemId } = useParams();
  console.log("item:" + itemId);
  const { data } = useQuery(
    QUERY_PHOTOS,

    {
      variables: { student_id: itemId },
    }
  );
  const photos = data?.getPhotos || [];
  console.log("photos:" + JSON.stringify(photos));
  const [addPhotoMutation] = useMutation(ADD_PHOTO);
  const [desc, setDesc] = useState("");
  const [imageSelected, setImageSelected] = useState("");
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [saveImage, setSaveImage] = useState({
    student_id: itemId,
    imageUrl: "",
    desd: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(true);
  };

  // const handleChange =(event) => {
  //  setDesc(event.target.value)
  //   console.log("handleChange:" + desc)
  // };
  const handleChange = () => {
    console.log("here");
  };
  const uploadImage = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "vpdvr4v6");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dhcq7qcuc/image/upload",
      formData,{secure:true}
    ).then((response) => {
      console.log("response.data.url:" + response.data.url);

      setSaveImage({ ...saveImage, imageUrl: response.data.url, desc: desc });
      console.log("url:" + saveImage);
      console.log("desc" + desc)
      // saveImagetoDB();
    });
  };
  useEffect(() => {
    // Update the document title using the browser API
    //saveImagetoDB();
    console.log("inside useEffect");
    async function saveImagetoDB() {
      console.log("coming");
      try {
        console.log("saveImage:" + JSON.stringify(saveImage));
        const { data } = await addPhotoMutation({
          variables: { ...saveImage },
        });
        console.log(JSON.stringify(data));
        if (!data) {
          throw new Error("something went wrong!");
        }
        handleOpen();
      } catch (err) {
        console.error(err);
      }
    }
    saveImagetoDB();
  }, [saveImage]);

  return (
    <form style={{ border: "dotted pink 2vw" }}>
      <div style={{ height: "100vh" }}>
        {photos ? (
          <main>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                fontFamily="Comic Sans Ms"
                gutterBottom
              >
                Student Photos
              </Typography>
            </Container>
            {/* <Container>
                <Grid container spacing={4}>
                  {photos.map((card) => (
                    <Grid item key={card._id} xs={6} sm={6} md={4}>
                      <Card
                        sx={{
                          maxWidth:345
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={card.imageUrl}
                          alt="random"
                          height="140"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h5">
                            {card.desc}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                
              </Container> */}
              <div style={{display:"flex", justifyContent:"center"}}>
            <ImageList sx={{ width: 300, height: 250 }}>
              {photos.map((card) => (
                <ImageListItem key={card._id}>
                  <img
                    src={`${card.imageUrl}?w=248&fit=crop&auto=format`}
                    srcSet={`${card.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={card.desc}
                    loading="lazy"
                  />
                  <ImageListItemBar title={card.desc} />
                </ImageListItem>
              ))}
            </ImageList>
            </div>
          </main>
        ) : (
          <h3> No Photos to display </h3>
        )}
        <div
          style={{
            border: "solid black .2vh",
            margin: "3rem",
            maxHeight: "35%",
            width: "20%",
            marginLeft:"35rem"
          }}
        >
          <div style={{padding:"2rem"}}>
          <TextField
            id="photoDesc"
            label="Description"
            variant="outlined"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={{ margin: "1rem" }}
          />
          <input
            name="fileInput"
            type="file"
            onChange={(event) => {
              setImageSelected(event.target.files[0]);
            }}
          ></input>
          <button
            style={{
              maxWidth: "6rem",
              height: "4rem",
              margin: "1rem",
              padding: ".5rem",
              borderRadius:"1rem"
            }}
            onClick={(event) => {
              uploadImage(event);
            }}
          >
            Upload
          </button>
          </div>
          {/* <Image cloudName= "dhcq7qcuc" publicId=""/> */}
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2>Success</h2>
            <p>Photo added successfully</p>
          </div>
        </Modal>
      </div>
    </form>
  );
};

export default AddPhoto;
