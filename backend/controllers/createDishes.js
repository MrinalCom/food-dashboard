const Dishes = require("../models/dishes.model");

exports.createDishes = async (req, res) => {
  try {
    const { dishId, dishName, imageUrl, isPublished } = req.body;

    if (!dishId || !dishName || !imageUrl || !isPublished) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const dish = await Dishes.create({
      dishId,
      dishName,
      imageUrl,
      isPublished,
    });

    return res.status(201).json({
      success: true,
      message: "Dish created successfully",
      dish,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Dish creation failed",
    });
  }
};
