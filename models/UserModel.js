const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
    avatar: { type: String },
    role: {
      type: String,
      default: 'member',
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('User', User);
