const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");
const app = express();


//mongoDb Connect
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () => console.log('MongoDB started'))
app.use('./images', express.static('public/images'))
//http://localhost:5000/images/ 

//routes & middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/auth", authController)
app.use("/property", propertyController)
app.use("/upload", uploadController)

//starting server
app.listen(process.env.PORT, () => console.log("Server has been started"))