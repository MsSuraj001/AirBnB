const express = require("express");
const ejs = require("ejs");
const mangoose = require("mongoose");
const app = express();

// this is the root dirctery
app.get("/", (req, res)=>{
    res.send("HII This is the root");
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})