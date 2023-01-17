
const mongoose = require("mongoose");

const linkDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Database is Linked... ")
    } catch (error) {
        console.log("...Database Cant Be Linked!")
    }
}

module.exports = linkDB;