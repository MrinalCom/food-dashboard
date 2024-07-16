const mongoose = require("mongoose");


const dishesSchema = new mongoose.Schema(
  { 
    dishId: {
      type: Number,
      unique:true,
      required: true,
    },
    dishName:{
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    isPublished: {
      type: Boolean,
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Dishes", dishesSchema);
