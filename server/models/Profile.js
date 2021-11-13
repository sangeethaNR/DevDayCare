const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
    required: true,
    trim: true,
  },
  joinedOn: {
    type: Date,
    required: true,
    trim: true,
  },
  allergy: [
    {
      type: String,
    },
  ],
  parents: [
    {
      parentName: {
        type: String,
        required: true,
      },
      phoneNo: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      relation: {
        type: String,
        required: true,
      },
    },
  ],
  emergencyContact: [
    {
      contactPerson: {
        type: String,
        required: true,
      },
      relationship: {
        type: String,
        required: true,
      },
      phoneNo: {
        type: String,
        required: true,
      },
    },
  ],
  physician: [
    {
      physicianName: {
        type: String,
        required: true,
      },
      medicalRecordNo: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      phoneNo: {
        type: String,
        required: true,
      },
    },
  ],
  isPottyTrained: {
    type: Boolean,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  medications: [
    {
      medName: {
        type: String,
        required: true,
      },
      dosage: {
        type: String,
        required: true,
      },
      
    },
  ],
  // mealPlans: [
  //     {
  //         type: Schema.Types.ObjectId,
  //         ref: "Food"
  //     }
  // ],
//   classAssigned: {
//     type: Schema.Types.ObjectId,
//     ref: "ClassRoom",
//   },
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
