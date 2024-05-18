const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/jokesAPI")
.then(()=>console.log("Connected Succesfully"))
.catch((error)=> console.log("Error conencting to DB: "+ error))