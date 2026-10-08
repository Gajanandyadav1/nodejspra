const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


dotenv.config();
const PORT = process.env.PORT || 5000;
// Routes
const productRoutes = require("./routes/mainroutes"); 
const app = express(); 

app.use(cors());
app.use(express.json());
 
connectDB();  
app.use("/api/products", productRoutes)sd;


// Test API
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully",
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});