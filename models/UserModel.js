const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    avatar: { type: String },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('User', User);
