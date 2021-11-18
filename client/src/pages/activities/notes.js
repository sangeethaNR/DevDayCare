import React,{useEffect, useState} from "react"; 
import { useParams } from "react-router-dom";
import {useQuery,useMutation} from "@apollo/client"

import Alert from '@material-ui/lab/Alert';
import { TextField } from "@material-ui/core";
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
import {QUERY_NOTES} from  '../../utils/queries'
import {ADD_NOTES} from '../../utils/mutations'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';





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

const Notes = () => {
  const {itemId} = useParams()
  const theme = createTheme();
  const [noteDesc,setNoteDesc] = useState("");
 
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const {  data } = useQuery(QUERY_NOTES,
   
    {
      variables: { student_id: `${itemId}`},
    }
  );
  const notes = data?.getNotes  || [];
  console.log('food:' + JSON.stringify(notes));
  const [addNotesMutation] = useMutation(ADD_NOTES);
  const handleOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
    window.location.reload(true)
};
const uploadNotes= async (event) =>{
  event.preventDefault();
    try{
      
  //  console.log("food:"+activityType +"desc" +desc)
    const {data} = await addNotesMutation({variables:{student_id:`${itemId}`,noteDesc:noteDesc,
   }});
    console.log(JSON.stringify(data));
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
         {notes ?(
    <ThemeProvider theme={theme}>
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
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
          {notes.map((note) => (
            <Grid item key={note._id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
               
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {note.noteDesc}
                 
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                   
                  {note.day}
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

         ):( <h3> No notes to display </h3>)}
       
<TextField id="activityDesc" label="Description" variant="outlined" value={noteDesc}
  onChange={(event)=> setNoteDesc(event.target.value)} />
  <button style={{maxWidth:"6rem", height:"4rem", marginRight:"1rem"}} onClick={(event) =>{uploadNotes(event)}}>Upload Note</button>
 


  
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
                      Note added successfully
                  </p>
              </div>
          </Modal>
   

    </div>
    </form>


  );

  }

export default Notes;

// function Notes() {
//   return (
//     <form>
//     <div class="form-box" style={{border: "dotted pink 2vw"}} variant="outlined" gutterBottom>
//     <label for="desc">Child Note:</label>
//     <input placeholder="Your Note" maxlength="28" type="text" />
//     <button type="submit">Submit</button>
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//     <ListItem alignItems="flex-start">
//     </ListItem>
//     <Divider variant="inset" component="li" />
//     <ListItem alignItems="flex-start">
//       <ListItemText
//         primary={
//           <React.Fragment>
//             {"PREVIOUS NOTES"}
//           </React.Fragment>
//         }
//       />
//       <Divider variant="inset" component="li" />
//     </ListItem>
//   </List>
//   </div>
//   </form>
//   );
// }

// export default Notes;
