const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ClassRoomSchema = new Schema({
  className: {
    type: String,
    required: true,
  },
  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Teachers",
    },
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
  mealPlans: [
    {
        type: Schema.Types.ObjectId,
        ref: "Food"
    }
],
},
{
  timestamps: true
});

const ClassRoom = mongoose.model("ClassRoom", ClassRoomSchema);

module.exports = ClassRoom;
