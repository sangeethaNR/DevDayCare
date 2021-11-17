import React,{useState} from "react"; 
import Axios from "axios"
import {Image} from "cloudinary-react"
import { set } from "mongoose";
import { useParams } from "react-router-dom";
import {useQuery,useMutation} from "@apollo/client"
import {ADD_PHOTO} from '../../utils/mutations'
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import {QUERY_PHOTOS} from  '../../utils/queries'


//TO Do : set popup when adding photo
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

const useStyles = makeStyles(theme => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
  },
}));


 

// TO DO:add logic to upload photo

function AddPhoto() {
  const cards = [1, 2, 3];

const theme = createTheme();
  const {itemId} = useParams()
  console.log('item:'+ itemId)
  const {  data } = useQuery(QUERY_PHOTOS,
   
    {
      variables: { student_id: itemId },
    }
  );
  const photos = data?.getPhotos  || [];
   console.log('photos:' + photos)
  const [addPhotoMutation] = useMutation(ADD_PHOTO)

const[imageSelected,setImageSelected] = useState("")
const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };
const [saveImage,setSaveImage] = useState({student_id:itemId,
imageUrl:''});

const uploadImage= async () =>{
  const formData = new FormData();
  formData.append("file",imageSelected);
  formData.append("upload_preset","vpdvr4v6");
   await Axios.post("https://api.cloudinary.com/v1_1/dhcq7qcuc/image/upload",
  formData)
  .then((response)=> {
    console.log(response.data.url)
  const ImageUrl ='imageUrl'
    setSaveImage({...saveImage,[ImageUrl]:response.data.url})
      saveImagetoDB();
  });
  
};
const  saveImagetoDB = async() =>{
  try{
    console.log("saveImage:" + JSON.stringify(saveImage) )
  const {data} = await addPhotoMutation({variables:{...saveImage}});
  console.log(data);
  if (!data) {

    throw new Error("something went wrong!");
   
  }
handleOpen()
 
} catch (err) {
console.error(err);


}

}

    return (
  
    <form style={{border:"dotted pink 2vw"}}>
      <div className="form-box" style={{display:"flex", justifyContent:"center"}}>
           {photos ?(
      <ThemeProvider theme={theme}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
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
             Student Photos ...
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained"
              color = "secondary"
              >View/Sort
                <Select> 
                  <MenuItem>Day</MenuItem>
                  <MenuItem>Month</MenuItem>
                  <MenuItem>Year</MenuItem>
                </Select>
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {photos.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%',
                    }}
                    image={card.imageUrl}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.day}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        {/* <Copyright /> */}
      </Box>
      {/* End footer */}
    </ThemeProvider>
  
           ):( <h3> No Photos to display </h3>)}

      <label for="desc">Add Photo</label>
     <input name ="fileInput" type="file" onChange={(event) =>{setImageSelected(event.target.files[0])}}></input>
      <button style={{maxWidth:"6rem", height:"4rem", marginRight:"1rem"}} onClick={uploadImage}>Upload Image</button>
      {/* <Image cloudName= "dhcq7qcuc" publicId=""/> */}
    
      <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Success</h2>
                    <p>
                        Photo added successfully
                    </p>
                </div>
            </Modal>
     

      </div>
      </form>
  

    );
  }


export default AddPhoto;