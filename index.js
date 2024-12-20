const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const Listing = require("./models/Listing")
const app = express();


main().then( () =>{
    console.log("Connected to MongoDB");
}).catch( (err)=>{
    console.log("Error connecting to MongoDB", err);
})

async function main(){
    mongoose.connect("mongodb+srv://Ms_Suraj:mssuraj007@cluster0.quhr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"); // here some problem
}

// this is the root dirctery
app.get("/", (req, res)=>{
    res.send("HII This is the root");
})

app.get("/testListing", async (req, res)=>{
    let simpleListing = new Listing({
        title: "Test Listing",
        price: 1000,
        description: "This is a test listing",
        location : "Bihar",
    })
    await simpleListing.save();
    console.log("simple Listing successfully seved the databases");
    res.send("simple Listing successfully seved the databases");
    
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})