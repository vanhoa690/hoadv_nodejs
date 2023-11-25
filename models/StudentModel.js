const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Student = new Schema(
  {
    fullname: { type: String },
    email: { type: String },
    password: { type: String },
    avatar: { type: String },
    class: { type: String },
    role: {
      type: String,
      default: 'student',
    }
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Student', Student);
