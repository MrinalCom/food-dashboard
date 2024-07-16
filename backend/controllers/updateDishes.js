const Dishes = require("../models/dishes.model");

exports.updateDishes = async (req,res) => {
    try{
        const {dishId,isPublished} = req.body;

        const dish = await Dishes.findOne({dishId:dishId})

        if(!dish || dish=== undefined){
            return res.status(404).json({
                success:false,
                message: "Dish with this Id not found"
            })
        }
     
        const updateDish = await Dishes.findOneAndUpdate({dishId: dishId }, {isPublished : !isPublished});

        
        return res.status(200).json({
            success:true,
            updateDish,
            message : "isPublished Updated"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message : "Updation failed"
        })
    }
}