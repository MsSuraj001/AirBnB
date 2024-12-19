const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    location: String,
    image: {
        type: String,
        set : (v)=> v === "" ? "https://www.britannica.com/science/forest" : v,
    },
    user: String
})

const ListingSchema = mongoose.model("ListingSchema", Schema);

modules.exports = ListingSchema;