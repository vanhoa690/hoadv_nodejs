const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Category = new Schema(
  {
    title: { type: String },
    description: { type: String },
    slug: { type: String },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Category', Category);
