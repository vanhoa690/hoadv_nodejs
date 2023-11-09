const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    content: { type: String},
    image: { type: String, maxLength: 255 },
    price: { type: Number},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', Product);