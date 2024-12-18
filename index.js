const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

const MONGODB_URL = "mongodb://127.0.0.1:27017/test";

main().then( () =>{
    console.log("Connected to MongoDB");
}).catch( (err)=>{
    console.log("Error connecting to MongoDB", err);
})

async function main(){
    mongoose.connect(MONGODB_URL)
}

// this is the root dirctery
app.get("/", (req, res)=>{
    res.send("HII This is the root");
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})