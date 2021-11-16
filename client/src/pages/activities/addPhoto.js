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
  const {itemId} = useParams()
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
    
      <div class="form-box">
         
      <label for="desc">Photo:</label>
     <input name ="fileInput" type="file" onChange={(event) =>{setImageSelected(event.target.files[0])}}></input>
      <button onClick={uploadImage}>Upload Image</button>
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
      
  

    );
  }

export default AddPhoto;