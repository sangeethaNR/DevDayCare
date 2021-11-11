//kid_id
//day
//image_url

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    student_id:
        {
            type: Schema.Types.ObjectId, 
            ref: 'Profile'
        },
    
    day:{
        type: Date,
        required: true,
        trim: true,
    },
    imageUrl:{
        type :String,
        required : true,   
    }

})


const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
