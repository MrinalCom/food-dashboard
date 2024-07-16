const Dishes = require("../models/dishes.model")

exports.getDishes = async (req,res) => {
    try{
        const dishes = await Dishes.find({});

        return res.status(200).json({
            success: true,
            dishes,
            message : "Data fetched successfully"
        })

    }catch(error){
        return res.status(500).json({
            success : false,
            message : "Data fetching failed",
        })
    }
}