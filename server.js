const express = require("express");
const path = require("path")
const dotenv = require("dotenv")
dotenv.config({path: "./config/config.env"})
const cors = require("cors");
const index = require("./routes/index")
const errrorHandler = require("./middleware/error");
const connectDB = require("./config/db")
connectDB()
const app = express();
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use("/api/v1/index", index)

app.use(errrorHandler)
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))