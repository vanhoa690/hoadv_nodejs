const mongoose = require('mongoose');
// const slug = require('mongoose-slug-updater');

// mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    title: { type: String },
    // slug: { type: String, slug: 'name', unique: true },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    price: { type: Number },
    rate: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Product', Product);
