//while displaying it on the page,we will have dropdown options with prepopulated categories
//in which the acitivity falls.
const dateFormat = require('../utils/dateFormat');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ActivitySchema = new Schema({
  activityType: {
    type: String,
    required: true,
  },
  day: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    trim: true,
  },
  desc: {
    type: String,
    required: true,
  },
  student_id:
  {
      type: Schema.Types.ObjectId, 
      ref: 'Profile'
  },

});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
