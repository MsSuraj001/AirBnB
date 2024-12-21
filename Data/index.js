const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/Listing.js");

main().then( () =>{
    console.log("Connected to MongoDB");
}).catch( (err)=>{
    console.log("Error connecting to MongoDB", err);
})

async function main(){
    mongoose.connect("mongodb+srv://Ms_Suraj:mssuraj007@cluster0.quhr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"); // here some problem
}

const dataDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("Data inserted");
}

dataDB();