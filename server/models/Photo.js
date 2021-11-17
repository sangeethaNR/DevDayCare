//kid_id
//day
//image_url

const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    student_id:
        {
            type: Schema.Types.ObjectId, 
            ref: 'Profile'
        },
    
    day:{
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
        trim: true,
    },
    imageUrl:{
        type :String,
        required : true,   
    },
    desc:{
        type :String,
 default:'picture'
    }

})


const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
