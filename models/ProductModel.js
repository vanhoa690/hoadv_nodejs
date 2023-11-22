import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    title: { type: String },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    price: { type: Number },
    rate: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('Product', Product);
