import React,{useState} from "react"; 
import Axios from "axios"
import {Image} from "cloudinary-react"
import { set } from "mongoose";
import { useParams } from "react-router-dom";
import {useQuery,useMutation} from "@apollo/client"
import {ADD_PHOTO} from '../../utils/mutations'


// TO DO:add logic to upload photo

function AddPhoto() {
  const {itemId} = useParams()
  const [addPhotoMutation] = useMutation(ADD_PHOTO)

const[imageSelected,setImageSelected] = useState("")
const [saveImage,setSaveImage] = useState({student_id:itemId,
imageUrl:''});
const uploadImage=() =>{
  const formData = new FormData();
  formData.append("file",imageSelected);
  formData.append("upload_preset","vpdvr4v6");
  Axios.post("https://api.cloudinary.com/v1_1/dhcq7qcuc/image/upload",
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

 
} catch (err) {
console.error(err);

}
}

    return (
    
      <div class="form-box">
         
      <label for="desc">Photo:</label>
     <input type="file" onChange={(event) =>{setImageSelected(event.target.files[0])}}></input>
      <button onClick={uploadImage}>Upload Image</button>
      {/* <Image cloudName= "dhcq7qcuc" publicId=""/> */}
      </div>
  

    );
  }

export default AddPhoto;