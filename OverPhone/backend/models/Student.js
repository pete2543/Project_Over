const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    Item_category: {
        type: String
    },
    name_product: {
        type: String
    },
    price: {
        type: Number
    },
    colour_product:{
        type:String
    }
}, {
    collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema);