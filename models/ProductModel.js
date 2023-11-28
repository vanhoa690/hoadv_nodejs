const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    title: { type: String },
    description: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    image: { type: String },
    price: { type: Number },
    rate: { type: Number },
    student: { type: Schema.Types.ObjectId, ref: 'Student' }
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Product', Product);
