const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")

const TeacherSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      unique: true,
    },
    last_name: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
  
    is_main: {
      type: Boolean,
      required: true,
      default: true
    },
    is_active: {
      type: Boolean,
      default: false
    },
    classRooms: [{
      type: Schema.Types.ObjectId,
      ref: "ClassRoom"
    }]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true
  }
);

// // hash user password
TeacherSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
TeacherSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const Teachers = mongoose.model("Teachers", TeacherSchema);

module.exports = Teachers;
