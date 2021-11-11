const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IncidentReportSchema = new Schema({

    desc:{
        type :String,
        required : true,
    },
    day:{
        type: Date,
        required: true,
        trim: true,
    },
    studentId:
    {
        type: Schema.Types.ObjectId, 
        ref: 'Profile'
    },

})


const IncidentReport = mongoose.model('IncidentReport', IncidentReportSchema);

module.exports = IncidentReport;