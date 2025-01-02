const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const Listing = require("./models/Listing");
const path = require("path");
const app = express();


main().then( () =>{
    console.log("Connected to MongoDB");
}).catch( (err)=>{
    console.log("Error connecting to MongoDB", err);
})

async function main(){
    mongoose.connect("mongodb+srv://Ms_Suraj:mssuraj007@cluster0.quhr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"); // here some problem
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// this is the root dirctery
app.get("/", (req, res)=>{
    res.send("HII This is the root");
})

app.get("/Listings", async (req, res)=>{
   const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings})
})

// app.get("/testListing", async (req, res)=>{
//     let simpleListing = new Listing({
//         title: "Test Listing",
//         price: 1000,
//         description: "This is a test listing",
//         location : "Bihar",
//     })
//     await simpleListing.save();
//     console.log("simple Listing successfully seved the databases");
//     res.send("simple Listing successfully seved the databases");
    
// })



app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})