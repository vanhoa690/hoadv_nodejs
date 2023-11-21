const User = require('../models/UserModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const { SECRET_CODE } = process.env;

class UsersController {
  // [GET] /users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [POST] /users
  async createUser(req, res) {
    try {
      const { username, email, password } = req.body;
      // Bước 2: Email người dùng đăng ký đã tồn tại trong DB hay chưa?
      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({
          message: 'Email này đã được đăng ký',
        });
      }

      // Bước 3: Mã hoá mật khẩu
      const hashPassword = await bcryptjs.hash(password, 10);
      await User.create({
        username,
        email,
        password: hashPassword,
      });
      res.status(200).json({ message: 'Add user successfull' });
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [POST] /users/login
  async loginUser(req, res) {
    try {
      const { email, password } = req.body;

      // Bước 2: Kiểm tra xem email có trong db hay không?
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({
          message: 'Email này chưa đăng ký, bạn có muốn đăng ký không?',
        });
      }

      // Bước 3: Kiểm tra password
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: 'Email or Password không đúng, vui lòng kiểm tra lại!',
        });
      }

      // Bước 4: Tạo ra token
      const token = jwt.sign({ _id: user._id }, SECRET_CODE, {
        expiresIn: '1d',
      });

      res.status(200).json({
        message: 'Login successfull',
        token,
        user: { email, username },
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  // [DELETE] /users/:id
  async deleleUser(req, res) {
    try {
      await User.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Delete User Successful' });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}

module.exports = new UsersController();
