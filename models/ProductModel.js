const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    slug: { type: String, slug: 'name', unique: true },
    description: { type: String, maxLength: 600 },
    content: { type: String },
    image: { type: String, maxLength: 255 },
    price: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', Product);