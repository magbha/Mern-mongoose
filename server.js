const express = require("express");

const app = express()

require("dotenv").config()

app.use(express.json())

const linkDB = require("./linkDB")
linkDB();

app.use("/api/contact" , require("./routes/contact"))
app.use("/api/user" , require("./routes/user"))

const PORT = process.env.PORT;

app.listen(PORT , error => {
    error ? console.error(`Fail To connect , ${error} `) 
  : console.log(`LocalServer is running on port ${PORT} `) 
})