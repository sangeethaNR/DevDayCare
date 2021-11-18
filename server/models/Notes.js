const mongoose = require("mongoose");
const dateFormat = require('../utils/dateFormat');
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
  noteDesc: {
    type:String
  },
  day: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    trim: true,
  },
  student_id: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
},
{
  timestamps: true
});

const Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;
