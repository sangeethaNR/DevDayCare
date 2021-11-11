const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TeacherSchema = new Schema({

    name: {
        type: String,
        unique: true
      }

});


const Teachers = mongoose.model('Teachers', TeacherSchema);

module.exports = Teachers;