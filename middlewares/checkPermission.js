const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/UserModel');

dotenv.config();

const { SECRET_CODE } = process.env;

const checkPermission = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    // Bước 1: Kiểm tra xem đã đăng nhập hay chưa?
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);
    if (!token) {
      return res.status(403).json({
        message: 'Bạn chưa đăng nhập!',
      });
    }
    // Bước 2: Verify token
    const decoded = jwt.verify(token, SECRET_CODE);
    console.log(decoded);
    if (!decoded) {
      throw new Error('Token Error!');
    }
    // Bước 3: Find User từ token
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(404).json({
        message: 'User không tồn tại trong hệ thống!',
      });
    }
    console.log(user);
    // Bước 4: Check user.role
    if (user.role !== 'admin') {
      return res.status(400).json({
        message: 'Bạn không có quyền làm việc này!',
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      name: error.name,
      message: error.message,
    });
  }
};

module.exports = checkPermission;
