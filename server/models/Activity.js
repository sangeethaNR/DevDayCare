//while displaying it on the page,we will have dropdown options with prepopulated categories
//in which the acitivity falls.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ActivitySchema = new Schema({

    activityType:{ 
        type :String,
        required : true,
    },
    day:{
        type: Date,
        required: true,
        trim: true,
    },
    desc:{
        type :String,
        required : true,
    },
    classRoomId:
    {
        type: Schema.Types.ObjectId, 
        ref: 'ClassRooms'
    },

})


const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;