const ProductModel = require("../models/product_model");

const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      return res.status(400).json({
        success: false,
        message: "Name, price and description are required",
      });
    }
    
    const product = await ProductModel.create({
      name,
      price,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.log("Create Product Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};




const GetAllProducts = async(req,res)=>{

    try { 

        const Getproducts = await ProductModel.find();

            res.status(404).json({
                success:true,
                message:"data fetch successfully",
                data:Getproducts 
            })
         

    } catch (error) {

        res.status(500).json({
            success:false,
            message:"internal server Error"
        })
        
    }
}

module.exports = { createProduct ,GetAllProducts};