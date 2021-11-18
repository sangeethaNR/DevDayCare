const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateFormat = require('../utils/dateFormat');
const IncidentReportSchema = new Schema({
  desc: {
    type:String,
    trim: true,
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
);

const IncidentReport = mongoose.model("IncidentReport", IncidentReportSchema);

module.exports = IncidentReport;
