const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NotesSchema = new Schema({
  noteDesc: [String],
  day: {
    type: Date,
    default: Date.now,
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
