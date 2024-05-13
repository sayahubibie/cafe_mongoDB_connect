const mongoose = require("mongoose")

const cafeSchema = new mongoose.Schema({
    item_name:
        {
            type : String,
            required : true,
        },
    
    short_name :
        {
            type: String,
            unique: true,
            required: true,
        },

    specification:
        {
            type: String,
        },
    
    category:
        {
            type: String,
        },
    
    price:
        {
            type: Number,
        }
    
})

const cafe = mongoose.model('user', cafeSchema)
module.exports = cafe