const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClassRoomSchema = new Schema({

classId :{
    type :Number,
    required : true,

},
className:{
    type :String,
    required : true,
},
teachers:[{
    type: Schema.Types.ObjectId,
    ref: "Teachers"
}

]
});


const ClassRoom = mongoose.model('ClassRoom', ClassRoomSchema);

module.exports = ClassRoom;