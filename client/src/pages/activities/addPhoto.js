import React,{useState} from "react"; 
import Axios from "axios"
import {Image} from "cloudinary-react"
import { set } from "mongoose";

// TO DO:add logic to upload photo

function AddPhoto() {
const[imageSelected,setImageSelected] = useState("")
const uploadImage=() =>{
  const formData = new FormData();
  formData.append("file",imageSelected);
  formData.append("upload_preset","vpdvr4v6");
  Axios.post("https://api.cloudinary.com/v1_1/dhcq7qcuc/image/upload",
  formData)
  .then((response)=> {
    console.log(response)
  });
};
    return (
      <form>
      <div class="form-box">
      <label for="desc">Photo:</label>
     <input type="file" onChange={(event) =>{setImageSelected(event.target.files[0])}}></input>
      <button onClick={uploadImage}>Upload Image</button>
      <Image cloudName= "dhcq7qcuc" publicId=""/>
      </div>
    </form>

    );
  }

export default AddPhoto;