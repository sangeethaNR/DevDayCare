const mongoose = require("mongoose");
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
    trim: true,
  },
  time:{
    type: String,
    required: true,
  },
  mealDesc: {
    type: String,
    required: true,
  },
},
{
  timestamps: true
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
