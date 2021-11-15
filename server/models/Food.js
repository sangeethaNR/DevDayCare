const mongoose = require("mongoose");
const dateFormat = require('../utils/dateFormat');
const Schema = mongoose.Schema;
const FoodSchema = new Schema({
  //breakfast,lunch,snack
  mealSession: {
    type: String,
    required: true,
  },
  day: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    trim: true,
  },
  time:{
    type: String,
   
  },
  mealDesc: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
